import { loadAllTasks, createTask, updateTaskCompletion } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(){
    // wait for databse to get back to use before continuing
    const tasks = await loadAllTasks()
    
    return NextResponse.json({ tasks }, { status: 200})
}

export async function POST(request: Request){
    try{
        const { description } = await request.json();
        if(!description || typeof description != "string"){
            return NextResponse.json(
            { error: "Description is required and must be a string"}, { status: 400}
            );
        }
        const result = await createTask(description);
        return NextResponse.json(
            { message: "Task created sucessfully", result}, { status:201 }
        );
    
    } catch (error) {
        console.error("Error creating task:", error);
        return NextResponse.json(
            { error: "Failed to create task"}, { status: 500}
        );
    }
}

export async function PUT(request: Request) {
    const { description, completed } = await request.json();
    const result = await updateTaskCompletion(description, completed);
    return NextResponse.json({ message: 'Task updated successfully', result }, { status: 200 });
}