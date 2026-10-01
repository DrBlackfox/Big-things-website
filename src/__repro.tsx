import { createRootRouteWithContext, type ErrorComponentProps } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type * as React from "react";

const V1 = ({ error, reset }: { error: Error; reset: () => void }) => <div>oops</div>;
const V2: React.FC<ErrorComponentProps> = ({ error }) => <div>{String(error)}</div>;

// @ts-expect-error expect V1 to fail
const _t1 = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: V1,
});

const _t2 = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: V2,
});

export const t = [_t1, _t2];
