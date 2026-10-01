import { createRootRouteWithContext } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

const ArrowComp = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);
  return <div>oops</div>;
};

function FnComp({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return <div>oops</div>;
}

const _tArrow = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: ArrowComp,
});

const _tFn = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: FnComp,
});

export const t = [_tArrow, _tFn];
