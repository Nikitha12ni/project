import React from "react";
import Component2 from "./Component2";
const Component1 =(props) => {
    return (
        <div>
            <h1>Component1</h1>
           <h3>{props.xValue}</h3> 
            <Component2/>
        </div>
    );
};
export default Component1;
