import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPageRedirector() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If the user is logged in, redirect to /home
  if (user) {
    return redirect("/home");
  }

  // If the user is not logged in, redirect to /sign-in
  return redirect("/sign-in");
}
