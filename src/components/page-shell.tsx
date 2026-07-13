import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { LanguageToggle } from "@/components/language-toggle";

type Background = "light" | "dark";

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
      <LanguageToggle />
    </div>
  );
}
