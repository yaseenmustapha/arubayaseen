import { generateComponents } from "@uploadthing/react";
import type { OurFileRouter } from "@/app/api/uploadThing/core";

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
