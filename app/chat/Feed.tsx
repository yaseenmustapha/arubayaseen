"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Post from "./Post";
import AddPost from "./AddPost";

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

  return (
    <>
      {session ? (
        <AddPost />
      ) : (
        <button
          className="font-gilda text-center border border-gray-500 rounded-md px-4 py-2 block mx-auto"
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
