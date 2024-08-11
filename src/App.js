import './App.css';
import { useState } from 'react';
import CounterApp from './components/CounterApp';

const  App =()=> {

  const [value , setValue ] = useState(0); // default value 0 
  const [ count, setCount] = useState(1);

  const onClickButton =()=>{
    setValue(5)
  }


  return (
    <div className="App">
      <div> Value : {value} </div> 
      <button onClick={onClickButton}>Set Value </button>
      <CounterApp  count={count} setCount={setCount} />

    </div>
  );
}

export default App;

const counter =(count) =>{

}


// const UseState = (value)=>{
//   var val =0;
//   const setValue =()=>{
//     val = value;
//   }

//   return [val, setValue]
// }

