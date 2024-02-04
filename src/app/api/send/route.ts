import { Resend } from "resend";

import type { IFormProps } from "@/components";
import { EmailTemplate } from "@/components/email";

const resend = new Resend(process.env.RESEND_TOKEN);
export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = (await request.json()) as IFormProps;
    const data = await resend.emails.send({
      from: "ecommerce@email.lucadevelop.com",
      react: EmailTemplate({ email, message, name, phone }),
      subject: "Eccomerce email",
      to: email
    });

    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
