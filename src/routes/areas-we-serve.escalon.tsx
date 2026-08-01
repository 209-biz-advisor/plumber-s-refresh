import { createFileRoute, redirect } from "@tanstack/react-router";

/**
 * Short Escalon slug. The indexed production URL is the long-form path, so this
 * permanently redirects into it to keep the existing authority.
 */
export const Route = createFileRoute("/areas-we-serve/escalon")({
  beforeLoad: () => {
    throw redirect({
      to: "/areas-we-serve/$city",
      params: { city: "escalon-plumber-emergency-plumbing-water-heater-" },
      statusCode: 301,
    });
  },
});
