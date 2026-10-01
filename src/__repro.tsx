import { createRootRouteWithContext, type ErrorComponentProps } from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";
import type * as React from "react";

const V3 = ({ error, reset }: ErrorComponentProps) => <div>{String(error)}{String(reset)}</div>;
const V4: React.FC<{ error: Error; reset: () => void }> = ({ error }) => <div>{String(error)}</div>;

const _t3 = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: V3,
});

const _t4 = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  errorComponent: V4,
});

export const t = [_t3, _t4];
