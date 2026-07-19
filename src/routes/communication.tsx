import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/communication")({
  head: () => ({ meta: [{ title: "Publicité & Signalétique — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
