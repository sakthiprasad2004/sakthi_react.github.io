import React,{useState} from "react";
// function Count(){
//     const[count,setCount]=useState(0);
//     return(
//         <div>
//         <p>count:{count}</p>
//         </div>
//     );
// }
function Count(){
   const[count,setCount]=useState(0);
   const incrementCount=()=>{
    setCount(count+1);
   };
   return(
    <div>
        <p>count:{count}</p>
        <button onClick ={incrementCount}>increment</button>
    </div>
   );
}
// function Count(){
//     const handleclick=(pram)=>{
//         console.log("button clicked",pram);
//         console.log("event target",event.target);
//     };
//     return(
//         <button onClick={handleclick}>clickme</button>
//     );
// }
export default Count;