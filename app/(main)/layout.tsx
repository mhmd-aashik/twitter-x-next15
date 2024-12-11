import { validateRequest } from "@/auth";
import Navbar from "@/components/navbar/Navbar";
import SessionProvider from "@/context/SessionProvider";
import { redirect } from "next/navigation";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();
  if (!session.user) redirect("/login");
  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto max-w-7xl p-5">{children}</div>
      </div>
    </SessionProvider>
  );
}