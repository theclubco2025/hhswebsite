import { Resend } from "resend";
import { business } from "@/config/site";

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function sendLeadEmail(payload: {
  subject: string;
  text: string;
  attachments?: { filename: string; content: Buffer }[];
}) {
  const resend = new Resend(requiredEnv("RESEND_API_KEY"));
  const result = await resend.emails.send({
    from: requiredEnv("EMAIL_FROM"),
    to: requiredEnv("EMAIL_TO"),
    subject: payload.subject,
    text: payload.text + `\n\nBusiness: ${business.officialName}\nPhone: ${business.phoneDisplay}`,
    attachments: payload.attachments
  });
  if (result.error) throw new Error(result.error.message);
}
