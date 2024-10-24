import { Post } from "@/models";

export default function PostArticle({post}:{post: Post}) {
    return (
        <div className="prose prose-neutral dark:prose-invert lg:prose-lg">
            <div className="text-primary mb-8 text-4xl font-bold tracking-tight">
                <h1>{post.title}</h1>
            </div>
            <div className="text-tertiary rounded-lg bg-card p-6 leading-relaxed shadow-sm">
                <p>{post.body}</p>
            </div>
        </div>
    );
}