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
  const [completedTasksWeek, setCompletedTasksWeek] = useState<Task[]>([])
  const [completedTasksMonth, setCompletedTasksMonth] = useState<Task[]>([])
  
  useEffect(() => {
    const fetchCompletedTasks = async () => {
      try{
        // Load tasks completed in the last 30 days
        const tasksForMonth = await loadCompletedTasks(30);

        // Get current date and calculate 7-day boundary
        const now = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(now.getDate() - 7);

        // Filter tasks: 
        // - Tasks within the last 7 days go into the 7-day list.
        // - Remaining tasks go into the 30-day list.
        const tasksForWeek = tasksForMonth.filter(task => new Date(task.start_time) >= sevenDaysAgo);
        const tasksForMonthFiltered = tasksForMonth.filter(task => new Date(task.start_time) < sevenDaysAgo);

        setCompletedTasksWeek(tasksForWeek);
        setCompletedTasksMonth(tasksForMonthFiltered);

      } catch (error) {
        console.error('Error fetching completed tasks:',error)
      }
    };
    fetchCompletedTasks();
    
  })
  
  return (
    <div>
      
      <div className="flex justify-between items-start">
        <Sidebar/>
        <div className="p-2"><SignIn/></div>
  
      </div>
      
      <div className="flex flex-col gap-4 items-center justify-center  ml-5 w-full h-screen ">
        <h3 className="font-bold text-5xl">COMPLETED</h3>
        <div className="flex flex-col gap-2 items-start">
          <h4 className="text-2xl font-bold"> Previous 7 Days</h4>
          <ul className="list-disc">
            {completedTasksWeek.length > 0 ? (
              completedTasksWeek.map((task, index) => (
                <li key={index}>
                  <span>{task.description} </span>
                  <span>(Completed on: {new Date(task.start_time).toLocaleDateString()})</span>
                </li>
              ))
            ): (
              <p>No tasks completed in the last 7 days</p>
            )}
          </ul>
          <h4 className="text-2xl font-bold"> Previous 30 Days</h4>
          <ul className="list-disc">
            {completedTasksMonth.length > 0 ? (
              completedTasksMonth.map((task, index) => (
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
    </div>
  );
}