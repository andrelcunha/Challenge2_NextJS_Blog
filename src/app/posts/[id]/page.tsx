import PostArticle from "@/components/post-article";
import { Post } from "@/models";

async function getPosts(id: string): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await response.json();
    return posts;
}

export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await getPosts(params.id);
    return (
        <main className="container mx-auto px-4 py-8">
            <PostArticle post={post} />
        </main>
    );
}