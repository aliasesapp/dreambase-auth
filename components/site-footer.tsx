import { siteConfig } from "@/config/site";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="w-full shrink-0 border-t bg-background py-3">
      <div className="container flex items-center justify-center gap-4">
        {siteConfig.creditLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </footer>
  );
}
