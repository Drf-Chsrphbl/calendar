"use client"
import Counter from "@/components/Counter";
import Sidebar from "@/components/Sidebar";

import { useState} from "react";

// This export represents the only function that is leaving to the frontend
// these tailwind classes put our button on the  center of the screen
export default function Home() {

    const[a,setA] = useState(0)
    const[b,setB] = useState(0)
    const [result,setResult] = useState(0)

    async function calculate(){
        // await is saying wait for the fetch to be completly finished first
        const response = await fetch(`/api/events?a=${a}&b=${b}`,{
            method: "GET",
            headers: {
                "Authorization":"password"
            }
        }
        
        )
    // checks if reponse is successful
    if (response.ok){

        const { result } = await response.json()
        setResult(result)
    }
    }
  return (
    <div>
      <Sidebar/>
      
      <div className="flex flex-col gap-4 items-center justify-center ml-5 w-full h-screen ">
        <p>A:</p>
        <input value={a.toString()} onChange={e => setA(Number.parseInt(e.target.value || "0"))} className="p-2 rounded shadow"/>
        <p>B:</p>
        <input value={b.toString()} onChange={e => setB(Number.parseInt(e.target.value || "0"))} className="p-2 rounded shadow"/>
        <button onClick={calculate}>Calculate</button>
        <p>Result={result}</p>
      </div>
    </div>
  );
}