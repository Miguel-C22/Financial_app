import { moneyIcon } from "@/utils/icons";
import Link from "next/link";

const buttonLinkStyle = `btn btn-primary no-underline w-3xs px-6 py-3 rounded-lg text-white transition duration-300`;

export default async function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col gap-8 py-12">
      <div className="flex flex-row flex-wrap justify-center gap-2 mb-2">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Your Monthly Budget, Made Easy.
        </h1>
        {moneyIcon}
      </div>
      <div className="flex flex-col gap-4">
        <Link href="/sign-in" className={buttonLinkStyle}>
          Sign In
        </Link>
        <Link href="/sign-up" className={buttonLinkStyle}>
          Sign Up
        </Link>
      </div>
    </main>
  );
}
