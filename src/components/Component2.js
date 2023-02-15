import React from "react";

const Component2 =(props) => {
    const handleClick=(x,y) =>{
        alert(x+y);
    }
    return (
        <div>
            <h1>Component2</h1>
            <h3 style={{color:"blue"}}>{props.textValue}
            </h3>
            <h3 style={{color:"red"}}>{props.onceMore}</h3>
            <button onClick={() => handleClick(10, 50)}>click</button>
          
        </div>
    );
};
export default Component2;
