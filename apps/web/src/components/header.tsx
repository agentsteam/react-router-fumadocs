import { ModeToggle } from "@/components/mode-toggle";
import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/docs", label: "Docs", end: false },
  { to: "/blog", label: "Blog", end: false },
  { to: "/dashboard", label: "Dashboard", end: false },
] as const;

export default function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                isActive
                  ? "font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
}
