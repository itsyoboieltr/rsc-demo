import { sql } from 'drizzle-orm';
import { db } from '~/server/db';

export default async function HomePage() {
  const test = await db.execute(sql`select * from data`);
  return (
    <main className={'flex items-center justify-center'}>
      <code>{JSON.stringify(test)}</code>
      <button></button>
    </main>
  );
}
