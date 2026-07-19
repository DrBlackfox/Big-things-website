import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/publicite")({
  head: () => ({ meta: [{ title: "Publicité & Signalétique — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
