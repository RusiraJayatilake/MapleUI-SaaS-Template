import { ResetPasswordForm } from "@/src/components/reset-password/reset-password-form";

const ResetPassword = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-bold">Reset Your Password</h1>
          </div>
          <ResetPasswordForm />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
