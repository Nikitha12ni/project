import React from "react";
import { Link } from "react-router-dom";
const NavigationBar =()=>{
    return (
        <div>
        <ul>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/Contacts">Contacts</Link>
       </li>
       <li>
       <Link to="/Services">Services</Link>
      </li>
      <li>
      <Link to="/About">About</Link>
     </li>
        </ul>
        
        </div>
    );
};
export default NavigationBar;