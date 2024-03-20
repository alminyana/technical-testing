import React, { useEffect, useState } from "react";
import './FetchDataTable.css';

const BASE_URL_DUMMY = 'https://dummyjson.com';

export interface Post {
    id: number;
    title: string;
    category: string;
}

export default function FetchDataTable() {
    const [allPosts, setAllPosts] = useState<Post[] | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();
    const [itemsNumber, setItemsNumber] = useState<number>(10);

    useEffect(() => {
        setIsLoading(true)
        const getPosts = async () => {
            try {
                const responseDummy = await fetch(`${BASE_URL_DUMMY}/products?limit=${itemsNumber}`);
                const posts = await responseDummy.json();            
                setAllPosts(posts.products);
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
    }, [itemsNumber]);

    if (error) {
        return <div>Something went wrong. Try again please...</div>;
    }

    return (
        <div>
            <h3>Fetch Data Test</h3>
            {isLoading && <div>Loading ...</div> }
            {!isLoading && (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <td  className="productId">ID</td>
                                <td className="productTitle">Title</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                        {allPosts && allPosts.length > 0 && allPosts.map((post) => {
                            return <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.category}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <button>First</button>
                        <button>Preview</button>
                        <button>Next</button>
                        <button>Last</button>
                    </div>
                </div>
            )}
        </div>
    );
}
