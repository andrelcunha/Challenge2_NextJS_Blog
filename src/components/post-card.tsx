import { Post } from "@/models";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
    return (
        <div className="line-clamp-2 pr-8 text-xl font-medium tracking-tight">
            <div key={post.id} className="mb-4">
                <Link href={`/posts/${post.id}`}>
                <h3>{post.title}</h3>
                </Link>
            </div>
        </div>
    );
}