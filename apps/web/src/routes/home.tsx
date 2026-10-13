import { Link } from "react-router";

export function meta() {
  return [
    { title: "hyperapp-build-ssg-app" },
    { name: "description", content: "React Router and Fumadocs static application" },
  ];
}

const cards = [
  {
    to: "/docs",
    title: "Documentation",
    text: "Static Fumadocs pages with search and LLM exports.",
  },
  {
    to: "/blog",
    title: "Blog",
    text: "A typed MDX collection with static index and article pages.",
  },
  {
    to: "/dashboard",
    title: "Dashboard",
    text: "A generic client-rendered route for interactive application UI.",
  },
] as const;

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col justify-center px-4 py-16">
      <p className="text-sm font-medium text-muted-foreground">
        One web app, multiple rendering modes
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
        React Router and Fumadocs in one Bun workspace.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Public content ships as static HTML. Dashboard routes hydrate from a focused CSR fallback.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-xl border bg-card p-5 transition-colors hover:bg-accent"
          >
            <h2 className="font-medium">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.text}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
