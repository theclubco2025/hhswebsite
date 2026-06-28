import { z } from "zod";
const req = (n: string) => z.string().trim().min(1, `${n} is required`);

export const quoteSchema = z.object({
  fullName: req("Full Name"),
  phone: req("Phone Number"),
  address: req("Service Address"),
  email: z.string().trim().email().optional().or(z.literal("")),
  service: req("Requested Service"),
  notes: z.string().trim().optional()
});
