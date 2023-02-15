import React from "react";
import Component2 from "./Component2";

import Madegoal from "./Madegoal";
import Missedgoal from "./Missedgoal";
const Component1 =(props) => {
    const bool=true;
   // if(bool){
     //   return <Missedgoal />;
    //}
    
    //return <Madegoal />;
   return (
       <div>
           <h1>Component1</h1>
          <h3>{props.xValue}
           </h3> 
         <Component2/>
          {/*props.xValue >=10 && <Madegoal/>*/}
          {bool ?<Madegoal/>:<Missedgoal/>}
        </div>
    );
};
export default Component1;
