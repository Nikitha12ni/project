
import './App.css';
import Image from "./assets/hi.jpg";
import Component2 from './components/Component2';
import Component1 from './components/Component1';
import Component3 from "./components/Component3";
function App() {
  var text;
  const x=10;
  const y=20;
  if(x === 10){
  text="equal";
  }
  else{
    text="not equal";
  }
      
  return <div className="App"><h1>hello world</h1>
  <p>this is paragraph </p>
  <p>{5+55}</p>
  <img  src={Image} alt="imfg" width="200px"/>
  <h2>{text}</h2>
  <h2>{x >= 10 ? "greater":"lesser"}</h2>
  <Component1 xValue={x}/>

  <Component2 textValue={text}/>
  <Component2 onceMore={y}/>
  <Component3/>
  </div>;
      
}

export default App;
