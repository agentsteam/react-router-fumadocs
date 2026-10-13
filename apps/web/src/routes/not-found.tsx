import { baseOptions } from "@/lib/layout.shared";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Link } from "react-router";

export function meta() {
  return [{ title: "Not Found | hyperapp-build-ssg-app" }];
}

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p className="mt-2 text-muted-foreground">This page could not be found.</p>
        <Link
          className="mt-5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          to="/"
        >
          Back home
        </Link>
      </div>
    </HomeLayout>
  );
}
