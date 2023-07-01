"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Filter from "bad-words";

const filter = new Filter();

export default function AddPost(): JSX.Element {
  const { data: session } = useSession();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Error creating post.");
  const router = useRouter();
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const enhanceWithAI = async () => {
    if (enhancing) return;
    if (content.length < 1) {
      setEnhanceError(true);
      return;
    }
    setEnhancing(true);
    setEnhanceError(false);

    const res = await fetch("/api/enhanceMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: content,
      }),
    });

    if (res.ok) {
      const GPTdata = await res.json();
      setContent(GPTdata.content.replace(/^"(.*)"$/, "$1"));
    } else {
      setEnhanceError(true);
    }
    setEnhancing(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(false);

    if (content.length < 1) {
      setErrorMessage("Post cannot be empty.");
      setError(true);
    } else if (filter.isProfane(content)) {
      setErrorMessage("Profanity is not allowed.");
      setError(true);
    } else {
      try {
        const filteredContent = filter.clean(content);
        
        const res = await fetch("/api/addPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: filteredContent,
            image: previewUrl,
          }),
        });
        if (res.ok) {
          setContent("");
          setImage(null);
          router.refresh();
        }
        setError(false);
      } catch {
        setErrorMessage("Error creating post.");
        setError(true);
      }
    }

    setLoading(false);
  };

  const uploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]!
    const filename = encodeURIComponent(file.name)
    const fileType = encodeURIComponent(file.type)
  
    const res = await fetch(
      `/api/upload-url?file=${filename}&fileType=${fileType}`
    )
    const resp = await res.json()
    const { url, fields } = resp;
    const formData = new FormData()
  
    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as string)
    })
  
    const upload = await fetch(url, {
      method: 'POST',
      body: formData,
    })
  
    if (upload.ok) {
      setPreviewUrl(`https://gameswap-dev.s3.us-west-2.amazonaws.com/${fields.key}`);
      console.log('Uploaded successfully!')
    } else {
      console.error('Upload failed.')
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="w-full">
      {previewUrl && (
        <img
          src={previewUrl}
          alt="Selected file preview"
          className="w-full mb-2"
        />
      )}

      <input
      className="border border-gray-400 rounded-md w-full p-2 mb-2"
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={uploadPhoto}
      />
      <textarea
        className="border border-gray-400 rounded-md w-full p-2"
        disabled={loading || enhancing}
        placeholder="Caption your photo"
        value={content}
        maxLength={100}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex items-center mt-2">
        <button
          type="submit"
          disabled={!content || loading || enhancing}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2"
        >
          {loading ? "Posting..." : "Post"}
        </button>
        {error && (
          <div className="relative">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => setError(false)}
            >
              Error
            </button>
            <div className="absolute right-0 top-0 mt-2 w-64">
              <div className="bg-white rounded-md shadow-lg p-4">
                <p className="text-red-500">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
        <button
          type="button"
          disabled={!content || enhancing}
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded-md ml-2"
          onClick={enhanceWithAI}
        >
          {enhancing ? "Enhancing..." : "Enhance with AI 😎"}
        </button>
        {enhanceError && (
          <div className="relative">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md ml-2"
              onClick={() => setEnhanceError(false)}
            >
              Error
            </button>
            <div className="absolute right-0 top-0 mt-2 w-64">
              <div className="bg-white rounded-md shadow-lg p-4">
                <p className="text-red-500">{errorMessage}</p>
              </div>
            </div>
          </div>
        )}
        <p className="ml-auto">{content ? content.length : 0}/100</p>
      </div>
    </form>
  );
}
