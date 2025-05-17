import React from 'react'
import UsersEmail from './UsersEmail'
import SignOutBtn from './SignOutBtn'

function Header() {
    return (
        <header className="w-full flex items-center justify-between px-6 py-4 bg-base-200 shadow-md rounded-md">
          <UsersEmail />
          <SignOutBtn />
        </header>
      );
}

export default Header