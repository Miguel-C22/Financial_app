import Link from "next/link";

const buttonLinkStyle = `btn btn-primary no-underline w-3xs px-6 py-3 rounded-lg text-white transition duration-300`;

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-8 py-12">
      <div className="flex flex-row flex-wrap justify-center gap-2 mb-2">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Your Monthly Budget, Made Easy. 
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          fill="none"
          viewBox="0 0 24 24" 
          strokeWidth={1.5}
          stroke="currentColor" 
          className="w-10 h-10 text-gray-800 align-middle">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
           />
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        <Link
          href="/sign-in"
          className={buttonLinkStyle}
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className={buttonLinkStyle}
        >
          Sign Up
        </Link>
      </div>
    </main>
  );
}