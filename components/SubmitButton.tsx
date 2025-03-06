"use client"
import React, { useState} from 'react';

export default function SubmitButton(){
    const [userInput,setUserInput] = useState("")

    const [toDoList, setToDoList] = useState<string[]>([])

    //const [isChecked, setIsChecked] = useState(false)
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement >) => {
        // prevents form to reload when event is submitted
        e.preventDefault()

        // getting the value of user input 
        // target helps us get the specific html element  that triggered the event like the <input> tag
        setUserInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
        // we do not want to refresh pag everytime we submit
        e.preventDefault()

        // most recent input is added to the start of the list 
        // spread operator (...) creates a new array adding all the previous items into the new array
        setToDoList([userInput,...toDoList])

        setUserInput("")
    }
    // passing current toDo and creates a new updated list 
    // the updated list only takes in elements in the old list that is not equal to the toDo element parameter 
    const handleDelete = (toDo: string) => {
        //const updatedList = toDoList.filter((toDoItem) => toDoList.indexOf(toDoItem) != toDoList.indexOf(toDo))
        const updatedList = toDoList.filter(toDoItem => toDoItem != toDo)
        setToDoList(updatedList)
    }

    
    // onChange tracks changes made to the input element
    // onClick handles click events 
    return(
        <div>
            <div className="bg-gray-200 border-2 border-solid border-black rounded-3xl">
                <input type="text" value={userInput} placeholder={"Enter a task"} onChange={handleChange} className="w-96 p-3 text-lg bg-transparent focus:outline-none"/>
                <button type='submit' onClick={handleSubmit} className="p-2 font-bold rounded-3xl">ADD</button>
            </div>
            <ul>
                {
                    toDoList.length >= 1 ? toDoList.map( (toDo, index) => {
                        return(
                            <li key={index}><input type="checkbox" onClick={(e)=>{
                                e.preventDefault()
                                handleDelete(toDo)}} 
                                
                                key={index}/>{toDo}</li>
                        )

                    })
                    : "Enter a to-Do list"
                }
            </ul>

        </div>
    )

}