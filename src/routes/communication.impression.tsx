import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/communication/impression")({
  head: () => ({ meta: [{ title: "Publicité — Big Things Decoration" }] }),
  component: () => <Outlet />,
});
