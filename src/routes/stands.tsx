import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/stands")({
  head: () => ({ meta: [{ title: "Stands d'exposition — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
