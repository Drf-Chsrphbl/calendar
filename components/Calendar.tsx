// signifying that this is for the client to see and interact with
// rather than the server
"use client" 

import _ from "lodash";

export function Calendar() {
    //const [date, setDate] = useState(new Date())
    
    // or big-[#hex code] for customised colour
    // can use px or rem (rem is adjusted proportionally)
    return(
        <div className="grid grid-cols-7 gap-3 justify-items-center"> 
            <p className="col-span-7"> Feb 2025</p>
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thur</p>
            <p>Fri</p>
            <p>Sat</p>

            {[_.range(31).map((v, i) => <p key={i}>{v + 1}</p>)]}
        </div>

    )
}