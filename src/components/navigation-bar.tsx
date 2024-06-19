import { SignedIn, SignedOut } from "@clerk/nextjs";

import { Brand } from "./brand";
import { CUserButton } from "./custom-user-button";
import Link from "next/link";
import { Skeleton } from "./ui/skeleton";
import { Suspense } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export async function NavigationBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex items-center justify-between max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <Link href={"/"}>
          <Brand />
        </Link>
        <div className="flex items-center gap-x-4">
          <SignedOut>
            <div className="invisible hidden md:flex md:visible md:gap-x-4">
              <Link
                href={"/sign-in"}
                className={cn(buttonVariants({ variant: "ghost" }))}
              >
                Sign In
              </Link>
              <Link
                href={"/sign-up"}
                className={cn(buttonVariants({ variant: "default" }))}
              >
                Sign Up
              </Link>
            </div>
          </SignedOut>
          <SignedIn>
            <Suspense
              fallback={<Skeleton className="w-[28px] h-[28px] rounded-full" />}
            >
              <CUserButton />
            </Suspense>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
