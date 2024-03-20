import { useContext } from "react";
import { TryContextData } from "./context";
import React from "react";

export default function SubComponentOne(props: any) {
    const data = useContext(TryContextData);
    const children = props.children

    return (
        <div>
            <div>this is SubComponentOne</div>
            <div>
                data value
            </div>
            <div>title:   {data?.title}</div>
            <div>id:      {data?.id}</div>
            <div>value:   {data?.value}</div>
            <div><button onClick={() => data?.printData(data.title)}>print title</button></div>

            <div>{children}</div>
        </div>
    );
}
