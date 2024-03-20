import React, { useEffect, useState } from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export interface Post {
    id: number;
    title: string;
}

export default function FetchDataTable() {
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    useEffect(() => {

        setIsLoading(true)
        const getPosts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const posts = await response.json() as Post[];            
                setAllPosts(posts);
            } catch (error) {
                setError(error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1500);
            }
        }

        getPosts();
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }, []);

    if (error) {
        return <div>Something went wrong. Try again please...</div>;
    }

    return (
        <div>
            <h3>Fetch Data Test</h3>
            {isLoading && <div>Loading ...</div> }
            {!isLoading && (
                // <div>
                //     {allPosts.map((post) => {
                //         return <div key={post.id}>{post.title}</div>
                //     })}
                // </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Title</td>
                            </tr>
                        </thead>
                        <tbody>
                        {allPosts.map((post) => {
                            return <tr key={post.id}>
                                <td >{post.id}</td>
                                <td>{post.title}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
