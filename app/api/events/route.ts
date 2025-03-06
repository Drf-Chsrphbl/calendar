import { loadAllEvents } from "@/lib/database";
import { NextResponse } from "next/server";

export async function GET(){
    // wait for databse to get back to use before continuing
    const events = await loadAllEvents()
    
    return NextResponse.json({events: events })
}

// export async function POST(request: NextRequest) {
//     const { title, desc, date} = await request.json()
//     await createEvent(title, desc, new Date(date))
//     return NextResponse.json({ success: true})
// }