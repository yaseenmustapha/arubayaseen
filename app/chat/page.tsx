import Feed from "./Feed";

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`, {
    next: { revalidate: 30 },
  });
  console.log(res);
  return res.json();
}

export default async function Chat() {
  const data: {
    id: string;
    image: string;
    content: string;
    user: { id: string; name: string; image: string };
    createdAt: string;
    likes: [];
  }[] = await getPosts();
  console.log('likes', data[0].likes); // access likes property of first post

  return (
    <main>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Feed posts={data} />
      </div>
    </main>
  );
}
