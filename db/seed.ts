import { db, Author, Comment } from 'astro:db';

export default async function seed() {
  await db.insert(Author).values([
    { id: 1, name: "Jonathan Bello", country: "MX" },
    { id: 2, name: "Monika Montolla", country: "PE" }
  ]);

  await db.insert(Comment).values([
      { id: 1, authorId: 1, postId: "apoyatec", body: "Bonito proyecto!" },
    { id: 2, authorId: 2, postId: "portafolio-web", body: "Por XXX xxx xxxx!" },
    { id: 3, authorId: 1, postId: "portafolio-web", body: "No lo creo..." },
  ]);
}