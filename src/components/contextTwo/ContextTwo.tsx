import { useState } from "react";
import { TryContextData } from "./context";
import React from "react";
import SubTryContext from "./SubContextTwo";

export interface Data {
    id: number;
    title: string;
    value: number;
    printData: (value: Data) => void;
}


export default function ContextTwo() {
    const consoleData = (value: Data) => {
        console.log(value);
        setState({
            id: 234242,
            title: 'data has changed',
            value: 234232343424,
            printData: consoleData
        });
    };

    const [data, setState] = useState<Data>({
        id: 1,
        title: 'First data',
        value: 129,
        printData: consoleData
    });

    return (
        <div>
            <TryContextData.Provider value={data}>
                <SubTryContext />
            </TryContextData.Provider>
        </div>
    );
}
