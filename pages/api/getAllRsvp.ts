import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // get all rsvp
    try {
      const result = await prisma.rsvp.findMany();
      return res.json(result);
    } catch (err) {
      res
        .status(402)
        .json({ err: "Error has occured while getting all RSVPs" });
    }
  }
}
