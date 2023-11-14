import { text, pgTable, integer } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2';

export const data = pgTable('data', {
  id: text('id').primaryKey().$defaultFn(createId),
  point: integer('point').notNull(),
});
