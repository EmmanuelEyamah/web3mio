"use server";

import { hash } from "bcrypt";
import { prisma } from "@/utils/prisma";
import { User } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function register(data: User) {
  try {
    const { email, password, username } = await data;
    // Validate email and password

    const hashedPassword = await hash(password, 10);

    // Insert the user into the database using Prisma
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
  } catch (e) {
    console.log({ e });
  }

  revalidatePath("/register");
}
