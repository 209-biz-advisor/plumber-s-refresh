import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, ShieldCheck, Cookie, SlidersHorizontal } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL, LICENSE_LABEL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { openCookiePreferences } from "@/lib/consent";

import { EmergencyRepairsCTA } from "@/components/EmergencyRepairsCTA";
const URL = `${SITE_URL}/cookie-policy/`;
const DESC =
  "Cookie Policy for Mainline Plumbing Inc. of Escalon, CA. What cookies and tracking technologies we use, the categories you can control, how we honor Global Privacy Control, and your California CCPA and CPRA rights.";

const EFFECTIVE = "September 1, 2026";

function PrefsButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={`inline-flex items-center gap-2 rounded-md bg-brand-orange px-4 py-2 text-sm font-semibold text-white hover:bg-brand-orange-deep ${className}`}
    >
      <SlidersHorizontal className="size-4" /> Manage Cookie Preferences
    </button>
  );
}

type Section = { id: string; title: string; body: React.ReactNode };

const cellHead = "border border-border bg-muted/60 px-3 py-2 text-left text-xs font-bold uppercase tracking-wider text-navy";
const cell = "border border-border px-3 py-2 align-top";

const sections: Section[] = [
  {
    id: "overview",
    title: "1. Overview",
    body: (
      <>
        <p>
          This Cookie Policy explains how Mainline Plumbing Inc. ("Company," "we," "our," or "us")
          uses cookies and similar tracking technologies on MainlinePlumber.com, and the choices you
          have as a California resident. It supplements our{" "}
          <Link to="/privacy-policy/" className="font-semibold text-brand-orange hover:underline">
            Privacy Policy
          </Link>
          , which describes how we handle personal information more broadly.
        </p>
        <p>
          This policy is written to meet the requirements of the California Consumer Privacy Act
          (CCPA) as amended by the California Privacy Rights Act (CPRA), and it reflects how our
          consent banner actually behaves: no analytics, advertising, or personalization cookies are
          set until you allow that category.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-r border-l-4 border-brand-orange bg-muted/60 p-4">
          <Cookie className="size-5 text-brand-orange shrink-0" aria-hidden="true" />
          <p className="text-navy font-semibold">
            You can change your cookie choices at any time on this page.
          </p>
          <PrefsButton />
        </div>
      </>
    ),
  },
  {
    id: "what-are-cookies",
    title: "2. What Cookies and Similar Technologies Are",
    body: (
      <>
        <p>
          A cookie is a small text file placed on your device by a website. Cookies let a site
          recognize your browser between page loads and visits. We also use technologies that behave
          like cookies, including:
        </p>
        <ul>
          <li>
            <strong>Local storage and session storage:</strong> browser storage used to remember your
            cookie choices and short-lived form or quote-request state.
          </li>
          <li>
            <strong>Pixels and tags:</strong> tiny image or script requests used to measure whether a
            visit or a form submission came from an ad or a search result.
          </li>
          <li>
            <strong>Embedded content:</strong> third-party frames such as our Google Maps location
            embed and our quote request form, which may set their own cookies once loaded.
          </li>
        </ul>
        <p>
          Cookies are either <strong>first-party</strong> (set by our domain) or{" "}
          <strong>third-party</strong> (set by another company whose service appears on our pages),
          and either <strong>session</strong> cookies (deleted when you close the browser) or{" "}
          <strong>persistent</strong> cookies (kept for a set period).
        </p>
      </>
    ),
  },
  {
    id: "categories",
    title: "3. Categories We Use and What You Control",
    body: (
      <>
        <p>
          Our preference center groups cookies into four categories. Only the first is always on;
          the other three are off by default until you opt in.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-sm">
            <thead>
              <tr>
                <th className={cellHead}>Category</th>
                <th className={cellHead}>Purpose</th>
                <th className={cellHead}>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}><strong>Strictly Necessary</strong></td>
                <td className={cell}>
                  Page routing, security and abuse prevention, load balancing, form submission, and
                  storing your cookie choices.
                </td>
                <td className={cell}>Always active (cannot be disabled)</td>
              </tr>
              <tr>
                <td className={cell}><strong>Analytics &amp; Performance</strong></td>
                <td className={cell}>
                  Aggregated measurement of visits, popular service and city pages, and site errors
                  or slow pages.
                </td>
                <td className={cell}>Off until you opt in</td>
              </tr>
              <tr>
                <td className={cell}><strong>Functional &amp; Personalization</strong></td>
                <td className={cell}>
                  Remembering your service area, partially completed forms, and quote-request or chat
                  sessions.
                </td>
                <td className={cell}>Off until you opt in</td>
              </tr>
              <tr>
                <td className={cell}><strong>Advertising &amp; Targeting</strong></td>
                <td className={cell}>
                  Measuring ad and campaign performance and showing our ads to prior visitors. This
                  is the category California law treats as sharing for cross-context behavioral
                  advertising.
                </td>
                <td className={cell}>Off until you opt in</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "specific-cookies",
    title: "4. Specific Cookies and Technologies",
    body: (
      <>
        <p>
          The table below lists what may be set on your device. Third-party items only appear after
          you allow the matching category or interact with the embedded content.
        </p>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-sm">
            <thead>
              <tr>
                <th className={cellHead}>Name / Provider</th>
                <th className={cellHead}>Type</th>
                <th className={cellHead}>Category</th>
                <th className={cellHead}>Retention</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cell}>mlp-cookie-consent (Mainline Plumbing)</td>
                <td className={cell}>First-party local storage</td>
                <td className={cell}>Strictly Necessary</td>
                <td className={cell}>Until you clear it or 12 months</td>
              </tr>
              <tr>
                <td className={cell}>Hosting and security tokens (site host / CDN)</td>
                <td className={cell}>First-party session</td>
                <td className={cell}>Strictly Necessary</td>
                <td className={cell}>Session</td>
              </tr>
              <tr>
                <td className={cell}>Quote request form (LeadConnector / HighLevel)</td>
                <td className={cell}>Third-party embed</td>
                <td className={cell}>Strictly Necessary for submission; Functional for saved entries</td>
                <td className={cell}>Session to 12 months</td>
              </tr>
              <tr>
                <td className={cell}>Google Maps location embed (Google)</td>
                <td className={cell}>Third-party embed</td>
                <td className={cell}>Functional</td>
                <td className={cell}>Session to 24 months</td>
              </tr>
              <tr>
                <td className={cell}>Site analytics (for example Google Analytics 4)</td>
                <td className={cell}>First-party and third-party</td>
                <td className={cell}>Analytics</td>
                <td className={cell}>Up to 14 months</td>
              </tr>
              <tr>
                <td className={cell}>Ad measurement and remarketing tags (for example Google Ads, Meta)</td>
                <td className={cell}>Third-party</td>
                <td className={cell}>Advertising</td>
                <td className={cell}>Up to 13 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-3">
          We keep this list current as our tools change. If a tool is not active on the site, no
          cookie for it is set, regardless of your selections.
        </p>
      </>
    ),
  },
  {
    id: "consent",
    title: "5. How Consent Works Here",
    body: (
      <>
        <p>On your first visit you see a banner with three equally available paths:</p>
        <ul>
          <li><strong>Accept All</strong> allows every category.</li>
          <li><strong>Reject All</strong> keeps only strictly necessary cookies.</li>
          <li><strong>Manage Preferences</strong> opens the category toggles.</li>
        </ul>
        <p>
          Analytics, advertising, and personalization technologies are blocked until the matching
          toggle is on. We record the date, time, and method of your choice as our record of
          consent, store it on your device, and re-ask if this policy materially changes or after 12
          months. Because the choice is stored per device and per browser, you may need to set it
          again on another device or after clearing your browser data.
        </p>
      </>
    ),
  },
  {
    id: "california",
    title: "6. Your California Privacy Rights (CCPA / CPRA)",
    body: (
      <>
        <p>
          If you are a California resident, you have the right to know what personal information we
          collect, to access and receive a copy of it, to correct inaccurate information, to delete
          it, to opt out of the sale or sharing of it, to limit the use of sensitive personal
          information, and to be free from retaliation for exercising these rights.
        </p>
        <p>
          <strong>Do Not Sell or Share My Personal Information.</strong> We do not sell personal
          information for money. Turning off the Advertising &amp; Targeting category is treated as
          your request to opt out of the sale and sharing of your personal information for
          cross-context behavioral advertising, and it takes effect immediately on this device.
        </p>
        <p>
          <strong>Sensitive personal information.</strong> We do not use cookies to collect precise
          geolocation, government identifiers, or other sensitive categories for advertising or
          profiling.
        </p>
        <p>
          <strong>Financial incentives.</strong> Our coupons and specials are available to everyone.
          We do not charge you a different price or provide a lower level of service because of your
          cookie choices, and rejecting cookies does not affect scheduling, pricing, or workmanship.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3 rounded-r border-l-4 border-brand-orange bg-muted/60 p-4">
          <p className="text-navy font-semibold">Exercise your choices now:</p>
          <PrefsButton />
        </div>
      </>
    ),
  },
  {
    id: "gpc",
    title: "7. Global Privacy Control and Browser Signals",
    body: (
      <>
        <p>
          We honor the Global Privacy Control (GPC) opt-out preference signal, which California
          regulations recognize as a valid opt-out of the sale and sharing of personal information.
          If your browser or extension sends GPC, or a legacy Do Not Track signal, we record an
          opt-out automatically on arrival and leave the Advertising &amp; Targeting category off.
          You can still opt in manually if you prefer.
        </p>
        <p>
          You may also enable GPC through a privacy-focused browser or extension, block or delete
          cookies in your browser settings, or browse in a private window. Blocking all cookies may
          break parts of the site, including our quote request form.
        </p>
      </>
    ),
  },
  {
    id: "authorized-agents",
    title: "8. Authorized Agents and Verification",
    body: (
      <>
        <p>
          You may use an authorized agent to submit a request on your behalf. We may ask the agent
          for written permission signed by you and may ask you to verify your identity directly. To
          verify a request we match information you provide, such as your name, service address,
          phone number, or email, against our records. We do not use verification information for
          any other purpose.
        </p>
        <p>
          We respond to requests within 45 days and may extend once by an additional 45 days with
          notice. Opt-out requests are honored within 15 business days.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "9. Third-Party Cookies and Links",
    body: (
      <>
        <p>
          Some cookies are set by companies whose tools we use, including our form provider, mapping
          provider, and advertising platforms. Those companies handle the data they collect under
          their own privacy policies, and we do not control their cookies once they load.
        </p>
        <p>
          Review pages on Google, Yelp, Facebook, Angi, and HomeAdvisor are external sites. When you
          follow a link to one of them, that site's own cookie and privacy practices apply.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "10. Children",
    body: (
      <p>
        Our services are directed to homeowners and property managers. We do not knowingly use
        cookies to collect personal information from anyone under 16, and we do not sell or share the
        personal information of consumers we know to be under 16.
      </p>
    ),
  },
  {
    id: "changes",
    title: "11. Changes to This Cookie Policy",
    body: (
      <p>
        We review this policy at least annually and update it when our tools or the law change. The
        effective date at the top of this page reflects the current version. If a change materially
        expands how we use cookies, we will present the consent banner again so you can make a fresh
        choice.
      </p>
    ),
  },
];

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy & California Privacy Choices | Mainline Plumbing" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Cookie Policy | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cookie Policy | Mainline Plumbing Inc." },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              "@id": `${URL}#webpage`,
              url: URL,
              name: "Cookie Policy",
              description: DESC,
              dateModified: "2026-09-01",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              publisher: { "@id": `${SITE_URL}/#business` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Cookie Policy", item: URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Cookie Policy</span>
          </nav>
          <span className="eyebrow mt-6 inline-block">Transparency and Control</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Cookie Policy</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            What cookies and tracking technologies Mainline Plumbing Inc. uses, the categories you
            can switch on or off, how we honor Global Privacy Control, and your rights as a
            California consumer under the CCPA and CPRA.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
            <span><strong className="text-white">Effective Date:</strong> {EFFECTIVE}</span>
            <span><strong className="text-white">Last Updated:</strong> {EFFECTIVE}</span>
            <span><strong className="text-white">Applies To:</strong> MainlinePlumber.com</span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <PrefsButton className="!px-5 !py-3" />
            <a href={PHONE_TEL} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              <Phone className="size-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container-x grid lg:grid-cols-[0.28fr_0.72fr] gap-10 items-start">
          <nav aria-label="On this page" className="lg:sticky lg:top-28 border border-border rounded-lg p-5 bg-muted/40">
            <p className="text-xs uppercase tracking-wider font-bold text-navy">On This Page</p>
            <ul className="mt-3 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-brand-orange">{s.title}</a>
                </li>
              ))}
              <li><a href="#contact" className="text-muted-foreground hover:text-brand-orange">12. Contact Us</a></li>
            </ul>
          </nav>

          <div className="max-w-3xl">
            <div className="space-y-10">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-navy border-l-4 border-brand-orange pl-4">{s.title}</h2>
                  <div className="mt-3 pl-4 space-y-3 text-muted-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-2">
                    {s.body}
                  </div>
                </article>
              ))}

              <article id="contact" className="scroll-mt-28">
                <h2 className="text-xl font-bold text-navy border-l-4 border-brand-orange pl-4">12. Contact Us</h2>
                <div className="mt-3 pl-4 text-muted-foreground">
                  <p>
                    To ask about this policy, request a copy of your information, or submit a
                    privacy request, reach us at:
                  </p>
                  <address className="not-italic mt-4 border border-border rounded-lg p-5 bg-muted/40 text-navy">
                    <strong>Mainline Plumbing Inc.</strong>
                    <br />18332 Campbell Ave.
                    <br />Escalon, CA 95320
                    <br />Phone: <a href={PHONE_TEL} className="text-brand-orange font-semibold hover:underline">{PHONE_DISPLAY}</a>
                    <br />Email: <a href="mailto:Office@MainlinePlumber.com" className="text-brand-orange font-semibold hover:underline">Office@MainlinePlumber.com</a>
                    <br />Website: MainlinePlumber.com
                  </address>
                </div>
              </article>
            </div>

            <div className="mt-12 border border-border rounded-lg p-6 bg-muted/40 flex items-start gap-4">
              <ShieldCheck className="size-6 text-brand-orange shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Mainline Plumbing Inc. is a licensed California plumbing contractor, {LICENSE_LABEL},
                bonded and insured. See our{" "}
                <Link to="/privacy-policy/" className="text-brand-orange font-semibold hover:underline">Privacy Policy</Link>{" "}
                and{" "}
                <Link to="/terms-and-conditions/" className="text-brand-orange font-semibold hover:underline">Terms and Conditions</Link>, or{" "}
                <Link to="/contact-us/" className="text-brand-orange font-semibold hover:underline">contact us</Link> with questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <EmergencyRepairsCTA />
      <SiteFooter />
    </div>
  );
}
