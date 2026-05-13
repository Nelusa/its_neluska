import { NextResponse } from "next/server";

import { getTwitchStatus } from "@/lib/twitch";

export const revalidate = 60;

export async function GET() {
  const status = await getTwitchStatus();
  return NextResponse.json(status);
}
