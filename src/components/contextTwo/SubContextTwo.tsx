import React from "react";
import SubComponentOne from "./SubComponentOne";

export default function SubTryContext() {
    return (
        <div>
            <div>this is subtryContext</div>
            <div>
                <SubComponentOne>
                    <h3>this is children</h3>
                </SubComponentOne>
            </div>
        </div>
    );
}
