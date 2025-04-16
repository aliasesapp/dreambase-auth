import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export const runtime = "edge";

export default function IndexPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <section className="container flex flex-1 flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-xl flex-col items-center justify-center gap-6">
          <Loader2Icon className="size-24 animate-spin text-accent" />
          <div className="flex flex-col items-center gap-1 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Dreambase app loading...
            </h1>
            <p className="text-xl text-muted-foreground">
              You may need to refresh the page.
            </p>
          </div>
          <div className="flex gap-4">
            <Button asChild variant="default">
              <Link
                href={siteConfig.links.dream}
                target="_blank"
                rel="noreferrer"
              >
                Visit Dreambase.ai
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
