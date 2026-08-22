import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const cookieStore = await cookies();

    const sessionId = cookieStore.get("session")?.value;

    if (sessionId) {
      await prisma.session.deleteMany({
        where: {
          id: sessionId,
        },
      });
    }

    cookieStore.delete("session");

    return NextResponse.json({
      message: "Logout successful",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
