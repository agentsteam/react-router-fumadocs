import { useMDXComponents } from "@/components/mdx";
import { formatDate } from "@/lib/date";
import { blog, blogSource } from "@/lib/source";
import { DocsBody } from "fumadocs-ui/layouts/docs/page";
import { use } from "react";
import { Link } from "react-router";

import type { Route } from "./+types/blog-post";

function loadPage({ params }: Route.LoaderArgs) {
  const slugs = params["*"].split("/").filter(Boolean);
  const page = blogSource.getPage(slugs);
  const post = page ? blog.getPage(page.path) : undefined;
  if (!page || !post) throw new Response("Not found", { status: 404 });

  return {
    path: page.path,
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
  };
}

// Resolve content routes locally when static hosting serves the SPA fallback.
export const loader = loadPage;
export const clientLoader = loadPage;

export function meta({ loaderData }: Route.MetaArgs) {
  return [
    { title: `${loaderData.title} | React Router application` },
    { name: "description", content: loaderData.description },
  ];
}

function Content({ path }: { path: string }) {
  const page = blog.getPage(path);
  if (!page) throw new Error(`Unknown blog post: ${path}`);

  use(page.load());
  const Mdx = page.body;

  return (
    <DocsBody>
      <Mdx components={useMDXComponents()} />
    </DocsBody>
  );
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-14">
      <Link className="text-sm text-muted-foreground hover:text-foreground" to="/blog">
        ← All posts
      </Link>
      <article className="mt-8">
        <header className="border-b pb-8">
          <h1 className="text-4xl font-semibold tracking-tight">{loaderData.title}</h1>
          <p className="mt-3 text-lg text-muted-foreground">{loaderData.description}</p>
          <div className="mt-4 text-sm text-muted-foreground">
            <time dateTime={loaderData.date}>{formatDate(loaderData.date)}</time>
            {loaderData.author ? ` · ${loaderData.author}` : null}
          </div>
        </header>
        <div className="pt-8">
          <Content path={loaderData.path} />
        </div>
      </article>
    </main>
  );
}
