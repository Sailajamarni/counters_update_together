import React from 'react'
import Child from './Child'
import { useState } from 'react';
function Parent(props) {
    const title="Title of page";
    let handleClick =() => {
        console.log("click");
        setCount(count+1);
    };
    let handleClick1 = () => {
        console.log("click");
        setCount1(count1+1);
    }
    const[count,setCount] = useState(0);
    const[count1,setCount1]=useState(0);
  return (
    <div>
      <div>
        <Child title={title} />
        <button onClick={handleClick}>Clicked {count} times</button>
        <button onClick={handleClick}>Clicked {count} times</button>
        <div></div>
        <button onClick={handleClick1}>Clicked {count1} times</button>
      </div>
    </div>
  )
}

export default Parent
