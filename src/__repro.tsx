import { createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";

function ErrorComponentA({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  useEffect(() => {}, [error]);
  return <div>oops</div>;
}

const _tA = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: ErrorComponentA,
});

function ErrorComponentB({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return <div>oops</div>;
}

const _tB = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: ErrorComponentB,
});

const _tC = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: ErrorComponentB,
  component: (): ReactNode => null,
});

export const t = [_tA, _tB, _tC];
