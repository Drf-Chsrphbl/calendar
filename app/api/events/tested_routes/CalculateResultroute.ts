import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const password = request.headers.get("Authorization")
    if (password !== "password"){
        return NextResponse.json({error: "Unauthorised"}, { status:401 })
    }
    const a = request.nextUrl.searchParams.get("a")
    const b = request.nextUrl.searchParams.get("b")
    return NextResponse.json({ result: Number.parseInt(a) + Number.parseInt(b)})
}