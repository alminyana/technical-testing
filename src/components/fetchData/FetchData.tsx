import React, { useEffect, useRef, useState } from "react";
import './FetchData.css'

const BASE_URL = 'https://jsonplaceholder.typicode.com';

interface Post {
    id: number;
    title: string;
}

export default function FetchData () {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);

    //create abortcontroller to avoid multiple request at same time
    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}`, {
                    signal: abortControllerRef.current?.signal }
                );
                const posts = await response.json() as Post[];                
                setPosts(posts);
            } catch (e: any) {
                if (e.name === 'AbortError') {
                    console.log('request aborted')
                    return;
                }

                setError(e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPosts();

        //on destroy component
        return () => {};
    }, [page]);

    if (error) {
        return <div className={'fetchData'}>Something went wrong. Try again please...</div>
    }

    return (
        <div className={'fetchDataContainer'}>
            <h3 className={'fetchTitle'}>FetchData component</h3>
            <button onClick={() => setPage(page + 1)}>Increase page ({page})</button>
            {isLoading && <div className="isLoading">Loading...</div>}
            {!isLoading && (
                <ul>
                    {posts.map((post) => {
                        return <li key={post.id}>{post.title}</li>
                    })}
                </ul>
            )}
        </div>
    );
}
