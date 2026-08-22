import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";

export default async function AdminPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="mt-4 text-gray-600">Welcome, {user.name}</p>

        <p className="mt-2 text-sm text-gray-500">Role: {user.role}</p>
      </div>
    </main>
  );
}
