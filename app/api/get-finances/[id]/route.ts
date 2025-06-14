import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const supabase = await createClient();

  // Extract `id` from the request URL
  const userId = req.nextUrl.pathname.split("/").pop();

  if (!userId) {
    return NextResponse.json(
      { error: "Missing user ID in request" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("payment_subscription")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
