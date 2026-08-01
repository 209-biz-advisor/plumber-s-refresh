import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy staging path. Permanently redirects to the production URL. */
export const Route = createFileRoute("/contact")({
  beforeLoad: () => {
    throw redirect({ to: "/contact-us", statusCode: 301 });
  },
});
