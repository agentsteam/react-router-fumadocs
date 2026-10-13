import { formatDate } from "@/lib/date";
import { blog, blogSource } from "@/lib/source";
import { Link } from "react-router";

import type { Route } from "./+types/blog-index";

export function loader() {
  return {
    posts: blogSource
      .getPages()
      .map((page) => {
        const post = blog.getPage(page.path);
        if (!post) throw new Error(`Unknown blog post: ${page.path}`);

        return {
          title: post.title,
          description: post.description,
          date: post.date,
          author: post.author,
          url: page.url,
        };
      })
      .sort((left, right) => right.date.localeCompare(left.date)),
  };
}

export function meta() {
  return [
    { title: "Blog | React Router application" },
    { name: "description", content: "Articles from the unified React Router template" },
  ];
}

export default function BlogIndex({ loaderData }: Route.ComponentProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14">
      <h1 className="text-4xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-3 text-muted-foreground">Typed MDX posts, rendered to static HTML.</p>
      <div className="mt-10 divide-y rounded-xl border bg-card">
        {loaderData.posts.map((post) => (
          <article key={post.url} className="p-6">
            <div className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.author ? ` · ${post.author}` : null}
            </div>
            <h2 className="mt-2 text-xl font-medium">
              <Link className="hover:underline" to={post.url}>
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
