"use client";
import { useSession } from "next-auth/react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";

const HeartIcon = ({ filled } : {filled: boolean}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "red" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="h-6 w-6 mr-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

export default function Post({
  id,
  image,
  content,
  user,
  createdAt,
  likes,
}: {
  id: string;
  image: string;
  content: string;
  user: { id: string; name: string; image: string };
  createdAt: string;
  likes: { id: string; postId: string; userId: string }[];
}) {
  const { data: session } = useSession();
  const { user: sessionUser } = session || {};
  const router = useRouter();

  const currentUserLiked =
    (session && likes.some((like) => like.userId === sessionUser?.id)) || false;

  const addLike = async (id: string) => {
    try {
      const res = await fetch("/api/addLike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: id,
        }),
      });
      if (res.ok) {
        router.refresh();
      }
    } catch {
      // console.log("Error liking post");
    }
  };

  const buttonClass = classNames("flex items-center text-gray-600 mr-4", {
    "text-red-500": currentUserLiked,
  });

  return (
    <div key={id} className="my-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={user.image}
          alt={user.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h1 className="text-lg font-bold">{user.name}</h1>
          <p className="text-gray-600">{formatDate(createdAt)}</p>
        </div>
      </div>
      <img src={image} alt={content} className="my-4 rounded-lg" />
      <p className="text-gray-800">{content}</p>
      <div className="flex items-center mt-4">
        <button className={buttonClass} onClick={() => session && addLike(id)}>
          <HeartIcon filled={currentUserLiked} />
          {likes.length}
        </button>
      </div>
    </div>
  );
}
