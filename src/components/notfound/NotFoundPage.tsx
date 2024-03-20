import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

// use of Link (from router) instead anchore to avoid refreshing the whole page.
export default function NotFoundPage() {
    return <div className="notFound">
        <h3>404 Not Found :(</h3>
        <Link className="backButton" to="/">Back Home :)</Link>
    </div>;
}
