import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function Home() {
  return (
    <section>
      <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16">
        <Alert href="/services/diesel">
          <Badge className="mr-2">new</Badge>
          Diesel Delivery &mdash; Order now
        </Alert>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
          Mobile Utility Services
        </h1>
        <p className="mb-8 text-lg font-normal text-center lg:text-xl sm:px-16 lg:px-40 text-foreground">
          Our expert mobile team provides fast, reliable, affordable solutions
          for your utility needs. We&apos;re just a click away. Trust us to make
          your life easier, one service call at a time.
        </p>
        <div className="grid place-items-center">
          <div className="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <Link href={"#"} className={cn(buttonVariants({ size: "lg" }))}>
              Order a Service
            </Link>
            <Link
              href={"#"}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  className: "hover:underline",
                })
              )}
            >
              Are you a business? Join us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Alert({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center px-1 py-1 mb-8 text-sm font-medium border rounded-lg bg-muted hover:bg-muted/80 dark:border-none"
    >
      {children}
      <ArrowRightIcon className="flex-shrink-0 w-4 h-4 ml-4 mr-2" />
    </Link>
  );
}
