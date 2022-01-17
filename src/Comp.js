import React{useState,useEffect}  from 'react';
export default function Comp(){
  const [count,setCount]=useState(0);
  //v1
  useEffect(()=>{
    console.log("render");
  });
  //v2
  useEffect(()=>{
  //sideeffect
  console.log("runs only onece after first render  ");
  ),[]);
  //v3
  useEffect(()=>{
    console.log('runs when the dependency array state changes');
  },[count]);
  //v4
  useEffect(()=>{
    return(=>{
      console.log("unmount")
    })
  },[] )
  return(
    <div>
      <button onClicl={()=> setCount(count-1)}>-</button>
      {count}
      <button onClick={()=> setCount(count +1)}>+</button>
  )
  
}