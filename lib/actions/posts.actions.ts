"use server";

import { validateRequest } from "@/auth";
import { createPostSchema } from "../validation";
import prisma from "../prisma";

export async function submitPost(input: string) {
  try {
    const { user } = await validateRequest();
    if (!user) throw new Error("Unauthorized");

    const { content } = createPostSchema.parse({ content: input });
    await prisma.post.create({
      data: {
        content,
        userId: user.id,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create post");
  }
}
