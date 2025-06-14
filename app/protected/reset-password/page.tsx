import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";

export default async function ResetPassword(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form className="w-full max-w-md bg-white dark:bg-base-100 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <h1 className="text-2xl font-medium text-center">Reset Password</h1>
        <p className="text-sm text-foreground/60 text-center">
          Please enter your new password below.
        </p>

        <div className="flex flex-col gap-4">
          <label htmlFor="password" className="font-medium">
            New password
          </label>
          <input
            type="password"
            name="password"
            placeholder="New password"
            required
            className="input input-bordered w-full"
          />

          <label htmlFor="confirmPassword" className="font-medium">
            Confirm password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            required
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            formAction={resetPasswordAction}
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
