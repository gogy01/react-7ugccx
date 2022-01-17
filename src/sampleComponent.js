import Reat from 'react'
export default function sampleComponent({bgcolor}{
  let styleObj={
    backgroundColor:bgcolor
  };
  
  let a=10;
  let b=20;
  return{
    <>
    <div style={styleObj}>heading</div>
    <div>value of a is:{a}</div>
    <div> value of b is:{b}</div>
    <div>
    sum of {a} and {b} is {a*b}
    </div>
};
}