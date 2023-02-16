import React from "react";
import Component2 from "./Component2";

import Madegoal from "./Madegoal";
import Missedgoal from "./Missedgoal";
const Component1 =(props) => {
    const bool=true;
    const cars=["ford","bmw","skoda","bentley","lamb"];
   // if(bool){
     //   return <Missedgoal />;
    //}
    
    //return <Madegoal />;
   return (
       <div>
           <h1>Component1</h1>
           <form>
            <label> Name:</label>
            <input type="text" name="name"/>
            <br/>
            <label> Password:</label>
            <input type="password" name="password"/><br/>
            
            <input type="submit" value="Submit"/>

           </form>
           <ul>{
            cars.map((car,i)=>(
              <li key={i}>
                {car}
              </li>
            ))}
            </ul>        
            
             <h3>{props.xValue}
           </h3> 
         <Component2/>
          {/*props.xValue >=10 && <Madegoal/>*/}
          {bool ?<Madegoal/>:<Missedgoal/>}
        </div>
    );
};
export default Component1;
