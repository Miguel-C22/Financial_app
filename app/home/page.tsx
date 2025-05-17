"use server";

import React from 'react'
import Header from '@/components/Header'
import { createClient } from '@/utils/supabase/server'
import ParentClientComponent from '@/components/ParentClientComponent';

async function page() {  
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.id) {
    return <div>Unauthorized</div>
  }

  return (
    <div className='flex justify-center flex-col gap-4'>
        <Header />
        <ParentClientComponent userId={user.id}/>
    </div>
  )
}

export default page