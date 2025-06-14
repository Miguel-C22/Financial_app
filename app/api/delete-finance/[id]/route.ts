import { createClient } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const supabase = await createClient();

  // Extract `id` from the request URL
  const financeId = req.nextUrl.pathname.split("/").pop();

  if (!financeId) {
    return NextResponse.json(
      { error: "Missing user ID in request" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("payment_subscription")
    .delete()
    .eq("id", financeId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
