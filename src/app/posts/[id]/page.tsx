import { Post } from "@/models";

async function getPosts(id: string): Promise<Post> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const posts = await response.json();
    return posts;
}

export default async function PostPage({ params }: { params: { id: string } }) {
    const post = await getPosts(params.id);
    return (
        <div>
            <div className="">
                <h1>{post.title}</h1>
            </div>
            <div className="">
                <p>{post.body}</p>
            </div>
        </div>
    );
}