import { neon } from "@neondatabase/serverless"

const sql = neon("postgresql://neondb_owner:npg_x92RElQbqstZ@ep-wispy-moon-ab1te3gs-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require")

export async function loadAllEvents() {

    const result = sql("select * from events");
    return result
}

export async function createEvent(name: string, desc: string, t: string) {
    const result = await sql(`;
        insert into events(event_name, event_description, start_time)
        values(${name},${desc},${t})`
    
    );
    return result
}