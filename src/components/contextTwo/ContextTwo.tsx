import { useState } from "react";
import { TryContextData } from "./context";
import React from "react";
import SubTryContext from "./SubContextTwo";

export interface Data {
    id: number;
    title: string;
    value: number;
    printData: (value: string) => void;
}

const consoleData = (value: string) => {
    console.log(value);
};

export default function ContextTwo() {
    const [data] = useState<Data>({
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
