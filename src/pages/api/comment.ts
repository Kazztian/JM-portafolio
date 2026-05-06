import { db, Comment, Author } from "astro:db";
import type { APIContext } from "astro";

export async function POST({ request, redirect }: APIContext) {
  const formData = await request.formData();

  const name = formData.get("name");
  const comment = formData.get("comment");
  const country = formData.get("country") || "CO";
  const slug = formData.get("slug");
  const currentPath = formData.get("currentPath");

  if (!name || !comment || !slug || !currentPath) {
    return redirect("/404");
  }

  const nameStr = name.toString();
  const commentStr = comment.toString();
  const slugStr = slug.toString();
  const currentPathStr = currentPath.toString();

  let authors = await db.select().from(Author);
  let author = authors.find((a) => a.name === nameStr);

  let authorId;

  if (!author) {
    authorId = Math.floor(Math.random() * 100000);
    await db.insert(Author).values({
      id: authorId,
      name: nameStr,
      country: country.toString(),
    });
  } else {
    authorId = author.id;
  }

  await db.insert(Comment).values({
    postId: slugStr,
    body: commentStr,
    authorId,
  });

  return redirect(currentPathStr);
}