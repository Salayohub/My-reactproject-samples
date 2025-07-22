import useCounterStore from "../stores/useCounterStore";


function Counter () {
   const { count, increment, decrement} = useCounterStore();
   return (
   
       <div style={{display: "flex", flexDirection: "column"}}>
           <span >{count}</span>
           <div>
           <button onClick={increment}> increment</button>


            <button onClick={decrement}> decrement</button>
           </div>
       </div>
   );
}




export default Counter;
