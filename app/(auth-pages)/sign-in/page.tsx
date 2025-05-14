import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form className="w-full max-w-md bg-white dark:bg-base-100 rounded-xl shadow-[0_0_20px_rgba(0,0,0,.2)] p-8 flex flex-col gap-6">       
        <h1 className="text-2xl font-medium text-center">Sign in</h1>
        <p className="text-sm text-center text-foreground">
          Don't have an account?{" "}
          <Link className="text-foreground font-medium underline" href="/sign-up">
            Sign up
          </Link>
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="you@example.com" required className="input input-bordered w-full" />

          <div className="flex justify-between items-center">
            <label htmlFor="password">Password</label>
            <Link className="text-xs text-foreground underline" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>

          <input
            type="password"
            name="password"
            placeholder="Your password"
            required
            className="input input-bordered w-full"
          />

          <button type="submit" formAction={signInAction} className="btn btn-primary mt-2 text-white">
            Sign in
          </button>

          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
