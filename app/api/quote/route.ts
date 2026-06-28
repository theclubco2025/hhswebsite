import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendLeadEmail } from "@/lib/mail";
import { parsePhotoUploads, UploadError } from "@/lib/formData";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const parsed = quoteSchema.safeParse({
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      email: formData.get("email"),
      service: formData.get("service"),
      notes: formData.get("notes")
    });
    if (!parsed.success) {
      return NextResponse.json({ error: "Please complete required fields." }, { status: 400 });
    }

    let uploads;
    try {
      uploads = await parsePhotoUploads(formData);
    } catch (e) {
      if (e instanceof UploadError) {
        return NextResponse.json({ error: e.message }, { status: 400 });
      }
      throw e;
    }

    const txt = [
      "New Quote Request",
      "------------------",
      `Full Name: ${parsed.data.fullName}`,
      `Phone Number: ${parsed.data.phone}`,
      `Service Address: ${parsed.data.address}`,
      `Email Address: ${parsed.data.email || "Not provided"}`,
      `Requested Service: ${parsed.data.service}`,
      `Notes: ${parsed.data.notes || "Not provided"}`,
      `Photos Attached: ${uploads.length > 0 ? uploads.length : "None"}`
    ].join("\n");

    await sendLeadEmail({
      subject: "New Quote Request - Harmony Home Services",
      text: txt,
      attachments: uploads.map((u) => ({ filename: u.filename, content: u.buffer }))
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Sorry, submission failed. Please call us directly." },
      { status: 500 }
    );
  }
}
