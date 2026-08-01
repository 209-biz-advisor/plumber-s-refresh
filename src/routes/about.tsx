import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy staging path. Permanently redirects to the production URL. */
export const Route = createFileRoute("/about")({
  beforeLoad: () => {
    throw redirect({ to: "/about-us", statusCode: 301 });
  },
});
