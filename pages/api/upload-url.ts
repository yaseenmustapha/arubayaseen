import S3 from "aws-sdk/clients/s3";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const s3 = new S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: "2006-03-01",
  });

  const post = await s3.createPresignedPost({
    Bucket: process.env.BUCKET_NAME,
    Fields: {
      key: req.query.file,
      "Content-Type": req.query.fileType,
    },
    Expires: 60, // seconds
    Conditions: [
      ["content-length-range", 0, 8048576], // up to 8 MB
    ],
  });

  res.status(200).json(post);
}
