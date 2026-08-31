import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy template index. 301 to the home page. */
export const Route = createFileRoute("/templates/")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
