import React from "react";
import Component2 from "./Component2";

import Madegoal from "./Madegoal";
import Missedgoal from "./Missedgoal";
const Component1 =(props) => {
  const pass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

  const handleNameChange=(event)=>{
    console.log(event.target.value);
  }
  const handleSubmit=(event)=>
  {
    event.preventDefault();
  }
  const handlePasswordChange =(event)=>{
    if(pass.test(event.target.value)){
      console.log("match");
    }
    else{
      console.log("not mtch");
    }
  }
    const bool=true;
    const cars=["ford","bmw","skoda","bentley","lamb"];
   // if(bool){
     //   return <Missedgoal />;
    //}
    
    //return <Madegoal />;
   return (
       <div>
           <h1>Component1</h1>
           <form onSubmit={handleSubmit}>
            <label> Name:</label>
            <input type="text" name="name" onChange={handleNameChange}/>
            <br/>
            <label> Password:</label>
            <input type="password" name="password"  onChange={handlePasswordChange}/><br/>

            <input type="submit" value="Submit" onChange={handleSubmit}/>

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
