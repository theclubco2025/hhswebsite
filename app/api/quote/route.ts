import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendLeadEmail } from "@/lib/mail";

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
    const txt = [
      "New Quote Request",
      "------------------",
      `Full Name: ${parsed.data.fullName}`,
      `Phone Number: ${parsed.data.phone}`,
      `Service Address: ${parsed.data.address}`,
      `Email Address: ${parsed.data.email || "Not provided"}`,
      `Requested Service: ${parsed.data.service}`,
      `Notes: ${parsed.data.notes || "Not provided"}`
    ].join("\n");
    await sendLeadEmail({ subject: "New Quote Request - Harmony Home Services", text: txt });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Sorry, submission failed. Please call us directly." },
      { status: 500 }
    );
  }
}
