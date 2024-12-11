import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold text-[#008AD8]">
              Sign up to Twitter-X
            </h1>
            <p className="text-muted-foreground">
              A place where <span className="italic">friendships</span> start
              and never end.
            </p>
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link
              href="/login"
              className="block text-center hover:text-blue-500 hover:underline"
            >
              Already have an account? Log in
            </Link>
          </div>
        </div>
        <Image
          src="https://cdn.punchng.com/wp-content/uploads/2023/07/24084806/Twitter-new-logo.jpeg"
          width={500}
          height={500}
          alt="x-cover pic"
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}
