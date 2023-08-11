'use server';

import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { InferModel, eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export type User = InferModel<typeof users, 'select'>;

export async function saveForm(data: FormData) {
  const nameValue = data.get('name');
  const emailValue = data.get('email');

  if (typeof nameValue !== 'string' || typeof emailValue !== 'string') {
    throw new Error('Name and email are not strings');
  }

  await db.insert(users).values({ name: nameValue, email: emailValue });

  revalidatePath('/');
}

export async function fetchUsers() {
  try {
    const userResults: User[] = await db.select().from(users);
    return userResults;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}

export async function deleteUser(data: FormData) {
  const userIdValue = data.get('userId');
  if (userIdValue === null || typeof userIdValue !== 'string') {
    throw new Error('User ID is missing or not a string from FormData');
  }
  const userId = parseInt(userIdValue, 10);

  if (typeof userId !== 'number') {
    throw new Error('User ID is not an integer');
  }

  try {
    await db.delete(users).where(eq(users.id, userId));
    revalidatePath('/');
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}
