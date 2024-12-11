import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-3xl font-bold text-[#008AD8]">
            Login to Twitter-X
          </h1>
          <div className="space-y-5">
            <LoginForm />
            <Link
              href="/sign-up"
              className="block hover:text-blue-500 text-center hover:underline"
            >
              Don&apos;t have an account? Sign up
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
