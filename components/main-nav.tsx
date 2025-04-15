import * as React from "react";
import Link from "next/link";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex items-end gap-1 md:gap-2">
      <Link
        href="/"
        target="_blank"
        className="flex items-center space-x-2"
        title={siteConfig.description}
      >
        <img src="/logo.png" alt="Dream Logo" className="h-6 w-auto" />
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 align-bottom sm:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex text-sm font-medium text-secondary-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
