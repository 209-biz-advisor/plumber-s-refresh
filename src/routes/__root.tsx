import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mainline Plumbing Inc. | Trusted Plumbers in Escalon & Modesto, CA" },
      { name: "description", content: "Family-owned plumbers in Escalon, CA. 16+ years of expert plumbing service and 37+ years of hands-on plumbing experience, water heaters, drain cleaning & emergency plumbing repairs across the Central Valley." },
      { property: "og:site_name", content: "Mainline Plumbing Inc." },
      { property: "og:title", content: "Mainline Plumbing Inc. | Trusted Plumbers in Escalon & Modesto, CA" },
      { property: "og:description", content: "Family-owned plumbers in Escalon, CA. 16+ years of expert plumbing service and 37+ years of hands-on plumbing experience, water heaters, drain cleaning & emergency plumbing repairs across the Central Valley." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mainlineplumber.net/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mainline Plumbing Inc. | Trusted Plumbers in Escalon & Modesto, CA" },
      { name: "twitter:description", content: "Family-owned plumbers in Escalon, CA. 16+ years of expert plumbing service and 37+ years of hands-on plumbing experience, water heaters, drain cleaning & emergency plumbing repairs across the Central Valley." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51465f4c-447c-4e80-b7e2-c821bfe4dbfa/id-preview-4060d70e--0ec1dde4-129d-4adb-beea-be79caf14920.lovable.app-1784394111940.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/51465f4c-447c-4e80-b7e2-c821bfe4dbfa/id-preview-4060d70e--0ec1dde4-129d-4adb-beea-be79caf14920.lovable.app-1784394111940.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "Plumber", "LocalBusiness"],
              "@id": "https://mainlineplumber.net/#business",
              name: "Mainline Plumbing Inc.",
              url: "https://mainlineplumber.net",
              telephone: "+1-209-838-1000",
              image: "https://mainlineplumber.net/favicon.png",
              logo: "https://mainlineplumber.net/favicon.png",
              priceRange: "$$",
              foundingDate: "2010",
              slogan: "Emergency Plumbing Repairs Available. Serving the 209 & 350.",
              description:
                "Family-owned plumbing company serving Escalon, Modesto, Manteca and the Central Valley since 2010. Water heater replacement, drain cleaning, leak detection, repipes and emergency plumbing repairs.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "18332 Campbell Ave.",
                addressLocality: "Escalon",
                addressRegion: "CA",
                postalCode: "95320",
                addressCountry: "US",
              },
              geo: { "@type": "GeoCoordinates", latitude: 37.7974, longitude: -120.9977 },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "07:00",
                  closes: "19:00",
                },
              ],
              areaServed: [
                "Escalon, CA", "Modesto, CA", "Manteca, CA", "Lathrop, CA", "Ripon, CA",
                "Oakdale, CA", "Riverbank, CA", "Salida, CA", "Turlock, CA", "Ceres, CA",
                "Hughson, CA", "Del Rio, CA", "Stockton, CA", "Stanislaus County, CA", "San Joaquin County, CA",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Plumbing Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency Plumbing Repairs" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Heater Replacement & Repair (Tank & Tankless)" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drain Cleaning & Hydro-Jetting" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Leak Detection & Slab Leak Repair" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Whole-Home Repipe (Copper & PEX)" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewer Line Repair & Replacement" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fixture Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gas Line Repair & Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Softener & Filtration Installation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Plumbing Service" } },
                ],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://mainlineplumber.net/#website",
              url: "https://mainlineplumber.net",
              name: "Mainline Plumbing Inc.",
              publisher: { "@id": "https://mainlineplumber.net/#business" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
