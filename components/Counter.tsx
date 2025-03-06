"use client"

import React, { useEffect, useState } from 'react'
// {} represents parameters
// this is like a class or interface in java
// use an interface to define the parameters we pass to components
interface counterProps {
    label: string;
    // optional prop, if not specified then value will be "undefined"
    defaultCount?: number;
    // typescript providdes types unions, here we are stating the direction can only be these two values
    direction?: "increment" | "decrement"

    // we can pass custom styling for each button
    className?: string;


}
// passing defaultCount and incrementValue as parameters
export default function Counter( {label, defaultCount, direction="increment", className}: counterProps) {
    // use state is used to run a function re-render the page so it updates
    // on the web page
    const [count, setCount] = useState(defaultCount ?? 0) // we use ?? operator to provide an alternative if defaultValue is "undefined"

    function click(){
        if (direction === "increment"){
            setCount(count+1)
        } else{
            setCount(count-1)
        }

    }
    // allowing webpage to react to change
    useEffect( () => {
        if (count === 10){
            alert("hi")
        }

    }, [count]) // [count] in the dependency array tells useEffect to run the effect whenever count changes.

return (
    // conditional rendering odd even below
    // also pass some fixed styling in classname but also added optional paramets using {}
    <button onClick={click} className={"bg-sky-500 text-white font-semibold text-x hover:scale-105 active:scale-95 p-4 rounded-md transition-all duration-100 shadow-lg" + (className ?? "")}> 
        <p> {label}:{count}</p>
        { count % 2 === 0 ? <p>Even</p> : <p>Odd</p>}
    </button>

  )
}

