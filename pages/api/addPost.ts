import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res
      .status(401)
      .json({ message: "Please sign in to create a post." });
  }

  const { user } = session;
  const { content, image } = req.body;
  console.log("image", image);
  const { name, type } = image;

  // Upload image to S3 bucket
  const params = {
    Bucket: process.env.S3_UPLOAD_BUCKET as string,
    Key: name,
    Body: image.data,
    ContentType: type,
  };

  try {

    // Get user from database
    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email || undefined },
    });

    // Create post
    const result = await prisma.post.create({
      data: {
        content: content as string,
        image: image as string,
        userId: prismaUser?.id as string,
      },
    });

    return res.json(result);
  } catch (err) {
    console.log(err);
    res.status(402).json({ err: "Error has occured while making a post" });
  }
}
