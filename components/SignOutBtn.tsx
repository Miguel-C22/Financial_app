'use client'

import React from 'react'
import { signOutAction } from '@/app/actions'

export default function SignOutBtn() {
  return (
    <div>
        <button 
            className="btn btn-active btn-primary text-white"
            onClick={() => signOutAction()}
        >
            Sign Out
        </button>
    </div>
  )
}
