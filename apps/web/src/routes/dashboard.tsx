export function meta() {
  return [{ title: "Dashboard | React Router template" }];
}
export default function Dashboard() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-14">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        CSR route served through React Router's generic SPA fallback.
      </p>
    </main>
  );
}
