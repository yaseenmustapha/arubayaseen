"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Post from "./Post";
import AddPost from "./AddPost";
import { useRouter } from "next/navigation";

export default function Feed({
  posts,
}: {
  posts: {
    id: string;
    image: string;
    content: string;
    user: { id: string; name: string; image: string };
    createdAt: string;
    likes: [];
  }[];
}) {
  const { data: session, status } = useSession();
  const { user } = session || {};
  const router = useRouter();

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <>
      {session && (
        <button
          className="font-gilda text-center border border-gray-500 rounded-md px-4 py-2 block mx-auto -mt-12 mb-6"
          onClick={handleRefresh}
        >
          Refresh Feed
        </button>
      )}

      {session ? (
        <AddPost />
      ) : (
        <button
          className="font-gilda text-center border border-blue-500 rounded-md px-4 py-2 block mx-auto"
          onClick={() => signIn()}
        >
          Login to use chat
        </button>
      )}
      <>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            image={post.image}
            content={post.content}
            user={post.user}
            createdAt={post.createdAt}
            likes={post.likes}
          />
        ))}
      </>
    </>
  );
}
