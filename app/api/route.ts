import { NextResponse } from "next/server";

export function GET() {
  NextResponse.json({ hello: "world" });
}
