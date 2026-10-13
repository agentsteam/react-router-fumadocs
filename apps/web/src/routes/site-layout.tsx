import Header from "@/components/header";
import { Outlet } from "react-router";

export default function SiteLayout() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr]">
      <Header />
      <Outlet />
    </div>
  );
}
