import React from 'react';
import { useParams } from 'react-router-dom';

export default function SingleProfilePage() {
    const params = useParams<{profileId: string}>();

    return (
        <div className="singleProfileContainer">
            <h4>Profile single page {params.profileId}</h4>
        </div>
    );
}
