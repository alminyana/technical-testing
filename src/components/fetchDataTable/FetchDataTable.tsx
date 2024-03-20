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
    const [page, setPage] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    // const [itemsNumber, setItemsNumber] = useState<number>(5);
    const itemsPerPage = 10;

    useEffect(()=>{
        console.log(page);
    }, [page]);

    useEffect(() => {
        setIsLoading(true)
        const getPosts = async () => {
            try {
                const responseDummy = await fetch(`${BASE_URL_DUMMY}/products?limit=10&page=5&skip=${page}`);
                const posts = await responseDummy.json();            
                setAllPosts(posts.products);
                setTotal(posts.total);
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
    }, [page]);

    if (error) {
        return <div>Something went wrong. Try again please...</div>;
    }

    return (
        <div>
            <h3>Fetch Data Test</h3>
            {isLoading && <div>Loading ...</div> }
            {!isLoading && (
                <div>
                   {/*  <div className="tableSettings">
                        <button type="button" disabled={itemsNumber===5} onClick={() => {setItemsNumber(5)}}>5 items per page</button>
                        <button type="button" disabled={itemsNumber===10} onClick={() => {setItemsNumber(10)}}>10 items per page</button>
                        <button type="button" disabled={itemsNumber===20} onClick={() => {setItemsNumber(20)}}>20 items per page</button>
                    </div> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <td  className="productId">ID</td>
                                <td className="productTitle">Title</td>
                                <td>Category</td>
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
                        <button disabled={page === 0} onClick={() => setPage(0)}>First</button>
                        <button disabled={page === 0} onClick={() => setPage(page - itemsPerPage)}>Preview</button>
                        <button disabled={page === total-itemsPerPage} onClick={() => setPage(page + itemsPerPage)}>Next</button>
                        <button disabled={page === total-itemsPerPage} onClick={() => setPage(total-itemsPerPage)}>Last</button>
                        
                    </div>
                </div>
            )}
        </div>
    );
}
