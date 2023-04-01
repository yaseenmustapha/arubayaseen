import sgMail, { MailDataRequired } from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface ConfirmationEmailData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  numGuests: number;
}

export async function sendConfirmationEmail(data: ConfirmationEmailData) {
  const { id, email, firstName, lastName, numGuests } = data;
  const msg: MailDataRequired = {
    to: email,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL as string,
      name: "Aruba & Yaseen",
    },
    templateId: process.env.SENDGRID_TEMPLATE_ID as string,
    dynamicTemplateData: {
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      numGuests: numGuests,
    },
  };
  await sgMail.send(msg);
}
