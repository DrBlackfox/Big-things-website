import { createRootRouteWithContext, type ErrorComponentProps } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type * as React from "react";

const V4: React.FC<{ error: Error; reset: () => void }> = ({ error }) => <div>{String(error)}</div>;
const V5 = (({ error }: { error: Error }) => <div>{String(error)}</div>) as React.FC<{ error: Error; reset: () => void }>;

const _t4 = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: V4,
});

const _t5 = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: V5,
});

export const t = [_t4, _t5];
