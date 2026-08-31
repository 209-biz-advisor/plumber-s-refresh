import { createFileRoute, redirect } from "@tanstack/react-router";

/** Legacy survey confirmation URL. 301 to the reviews page. */
export const Route = createFileRoute("/nps-survey/thank-you")({
  beforeLoad: () => {
    throw redirect({ to: "/reviews/", statusCode: 301 });
  },
});
