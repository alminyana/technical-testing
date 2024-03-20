import React from 'react';

export interface IsLoggedComponentProps {
    name: string;
}

export default function IsLoggedComponent(props: IsLoggedComponentProps) {
    return (
        <div>
            <div>Currently logged as: {props.name}</div>
        </div>
    );
}
