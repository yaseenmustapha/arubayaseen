import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { sendConfirmationEmail } from "@/lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // create rsvp
    try {
      const { email, firstName, lastName, quantity } = req.body;
      const result = await prisma.rsvp.create({
        data: {
          email,
          firstName,
          lastName,
          quantity,
        },
      });
      await sendConfirmationEmail({ email, firstName, lastName, numGuests: quantity });
      return res.json(result);
    } catch (err) {
      res.status(402).json({ err: "Error has occured while creating an RSVP" });
    }
  } else if (req.method === "GET") {
    // get single rsvp by email
    try {
      const { email } = req.query;
      const result = await prisma.rsvp.findUnique({
        where: {
          email: email as string,
        },
      });
      return res.json(result);
    } catch (err) {
      res.status(402).json({ err: "Error has occured while getting an RSVP" });
    }
  } else if (req.method === "PUT") {
    // update rsvp
    try {
      const { email, firstName, lastName, quantity } = req.body;
      const result = await prisma.rsvp.update({
        where: {
          email: email as string,
        },
        data: {
          firstName,
          lastName,
          quantity,
        },
      });
      await sendConfirmationEmail({ email, firstName, lastName, numGuests: quantity });
      return res.json(result);
    } catch (err) {
      res.status(402).json({ err: "Error has occured while updating an RSVP" });
    }
  } else if (req.method === "DELETE") {
    // delete rsvp
    try {
      const { email } = req.body;
      const result = await prisma.rsvp.delete({
        where: {
          email: email as string,
        },
      });
      return res.json(result);
    } catch (err) {
      res.status(402).json({ err: "Error has occured while deleting an RSVP" });
    }
  }
}
