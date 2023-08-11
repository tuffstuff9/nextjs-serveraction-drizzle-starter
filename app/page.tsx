'use server';

import { Suspense, experimental_useOptimistic as useOptimistic } from 'react';
import { saveForm } from './_actions';
import UserList from './UserList';
import Form from './FormPage';
import { revalidatePath } from 'next/cache';
import FormPage from './FormPage';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-top p-12 bg-neutral-950'>
      <div>
        <FormPage />
        <Suspense fallback={<p>Loading users...</p>}>
          <UserList />
        </Suspense>
      </div>
    </main>
  );
}
