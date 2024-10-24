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
    <main className="">
      <h1>Next.js Blog</h1>
      <p>FullCycle's Imersion Challenge #2</p>
      <div>
        {posts.map((post: Post) => (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} className="">
            <h2>{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
