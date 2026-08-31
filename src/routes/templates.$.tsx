import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Legacy Scorpion template artifacts (/templates/, /templates/home/,
 * /templates/general/). Never real content; 301 to the home page.
 */
export const Route = createFileRoute("/templates/$")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
});
