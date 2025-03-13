import { neon } from "@neondatabase/serverless"

const sql = neon("postgresql://neondb_owner:npg_x92RElQbqstZ@ep-wispy-moon-ab1te3gs-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require");


export type Task = {
    id: number,
    description: string,
    start_time: Date,
    completed:  boolean
}

export async function loadAllTasks() {
    const result = await sql(`select * from task`) as Task[];
    return result
}

export async function createTask(desc: string) {
    const result = await sql(`
        INSERT INTO task (description)
        VALUES ($1)
        `, [desc] // desc is passed into $1 as a string (safely sanitized) 
    
    );
    return result
}

export async function updateTaskCompletion(desc: string, completed: boolean) {
    const result = await sql(
        `
            UPDATE task
            SET completed = $2
            WHERE description = $1
            RETURNING *
        `,
        [desc, completed]
    );
    return result;
}

export async function loadCompletedTasks() {
    const result = await sql(
        `SELECT * FROM task
         WHERE completed = true
         AND start_time >= NOW() - INTERVAL '30 days'
        `
    );
    return result as Task[]
}