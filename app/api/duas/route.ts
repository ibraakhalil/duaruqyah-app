import { API_URL } from "@/constants/constants"
import axios from "axios"
import { NextResponse } from "next/server"


export async function GET() {
    const res = await axios.get(`${API_URL}/duas`)
    return NextResponse.json(res.data)
}