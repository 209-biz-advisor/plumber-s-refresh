import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy staging path. Permanently redirects to the production URL. */
export const Route = createFileRoute("/services")({
  beforeLoad: () => {
    throw redirect({ to: "/plumbing-services/", statusCode: 301 });
  },
});
