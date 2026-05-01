import { column, defineDb, defineTable } from 'astro:db';

// ✅ Exportar tablas
export const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    country: column.text(),
  },
});

export const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    postId: column.text(),
    body: column.text(),
    authorId: column.number({
      references: () => Author.columns.id
    }),
  },
});

// ✅ Registrar tablas aquí
export default defineDb({
  tables: {
    Author,
    Comment
  }
});