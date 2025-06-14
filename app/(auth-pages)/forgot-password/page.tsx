import { forgotPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import Link from "next/link";

export default async function ForgotPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form className="w-full max-w-md bg-white dark:bg-base-100 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-medium text-center">Reset Password</h1>

        <p className="text-sm text-center text-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="text-primary font-medium underline">
            Sign in
          </Link>
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            formAction={forgotPasswordAction}
            className="btn btn-primary mt-2 text-white"
          >
            Reset Password
          </button>

          <FormMessage message={searchParams} />
        </div>
      </form>
    </div>
  );
}
