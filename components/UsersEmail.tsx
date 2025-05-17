"use server";

import { extractFirstNameFromEmail } from "@/utils/extractFirstName";
import { createClient } from "@/utils/supabase/server";
import React from "react";

async function UsersEmail() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const name = extractFirstNameFromEmail(user?.email);

  return <div>{name}</div>;
}

export default UsersEmail;