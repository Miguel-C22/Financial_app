import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Link from "next/link";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form className="w-full max-w-md bg-white dark:bg-base-100 rounded-xl shadow-[0_0_20px_rgba(0,0,0,.2)] p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-medium text-center">Sign up</h1>
        <p className="text-sm text-center text-foreground">
          Already have an account?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-in">
            Sign in
          </Link>
        </p>
  
        <div className="flex flex-col gap-4 mt-4">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="you@example.com"
            required
            className="input input-bordered w-full"
          />
  
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
            className="input input-bordered w-full"
          />
  
          <button
            type="submit"
            formAction={signUpAction}
            className="btn btn-primary mt-2 text-white"
          >
            Sign up
          </button>
  
          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
