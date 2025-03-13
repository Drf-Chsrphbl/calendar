"use client"
//import Counter from "@/components/Counter";
import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/Sidebar";
import SignIn from "@/components/SignIn"
import { Task, loadCompletedTasks } from '@/lib/database';
//import Image from "next/image";


// This export represents the only function that is leaving to the frontend
// these tailwind classes put our button on the  center of the screen
export default function Completed() {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])
  
  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try{
        const tasks = await loadCompletedTasks();
        console.log(tasks)
        // const descriptionTasks = tasks.map(task => task.description);
        setCompletedTasks(tasks)

      } catch (error) {
        console.error('Error fetching completed tasks:',error)
      }
    };
    fetchCompletedTasks();
    
  })
  
  return (
    <div>
      
      <div className="flex justify-between items-start p-2">
        <Sidebar/>
        <SignIn/>
      </div>
      
      <div className="flex flex-col gap-4 items-center justify-center ml-5 w-full h-screen ">
        <h3 className="font-bold text-5xl">COMPLETED</h3>
        <h4 className="text-2xl"> Previous 30 Days</h4>
        <ul className="list-disc">
          {completedTasks.length > 0 ? (
            completedTasks.map((task, index) => (
              <li key={index}>
                <span>{task.description} </span>
                <span>(Completed on: {new Date(task.start_time).toLocaleDateString()})</span>
              </li>
            ))
          ): (
            <p>No tasks completed in the last 30 days</p>
          )}
        </ul>
      </div>
    </div>
  );
}