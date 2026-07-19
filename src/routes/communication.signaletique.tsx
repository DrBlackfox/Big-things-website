import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/publicite/signaletique")({
  head: () => ({ meta: [{ title: "Signalétique — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
