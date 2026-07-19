import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/communication/signaletique")({
  head: () => ({ meta: [{ title: "Signalétique — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
