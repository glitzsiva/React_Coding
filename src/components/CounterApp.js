


const CounterApp =(prop)=>{


    // const { count, setCount } = props; //  Obj Destructuring
    console.log("Counter Rerender...", prop.count);


    
    return(
    <div >
        <h1>Counter App</h1>
        <div> Count :{prop.count}</div>
        <button onClick={ ()=>{prop.setCount(prop.count+1) } } >Increase Count</button>
        <button onClick={ ()=>{prop.setCount(prop.count-1) } } >decrease Count</button>
        <button onClick={ ()=>{prop.setCount(1) } } >reset Count</button>
    </div>
    )
}

export default CounterApp;