import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/publicite/publicite")({
  head: () => ({ meta: [{ title: "Publicité — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
