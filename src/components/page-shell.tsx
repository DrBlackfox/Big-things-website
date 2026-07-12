import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type Background = "light" | "dark";

/**
 * Shared page shell: sticky header, main content region, footer.
 * Use `background="dark"` for pages built on the charcoal palette
 * (product listings, category pages), `"light"` (default) for
 * regular content pages.
 */
export function PageShell({
  children,
  background = "light",
  mainClassName = "",
}: {
  children: ReactNode;
  background?: Background;
  mainClassName?: string;
}) {
  const bg = background === "dark" ? "bg-[color:var(--brand-charcoal)]" : "bg-white";
  return (
    <div className={`min-h-dvh flex flex-col ${bg}`}>
      <SiteHeader />
      <main className={`flex-1 ${mainClassName}`}>{children}</main>
      <SiteFooter />
    </div>
  );
}
