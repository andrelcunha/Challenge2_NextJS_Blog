import { PostCard } from "@/components/post-card";
import { Post } from "@/models";
import Link from "next/link";

async function getPosts(): Promise<Post[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return posts;
}


export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-2 text-center text-4xl font-bold tracking-tight">
          <h1>My Next.js Blog</h1>
        </div>
        <div className="mb-12 text-center text-lg text-secondary">
          <p>FullCycle's Imersion Challenge #2</p>
        </div>
        <div className="grid gap-4">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}
