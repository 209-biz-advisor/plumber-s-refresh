import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

const URL = `${SITE_URL}/privacy-policy/`;
const DESC =
  "Privacy Policy for Mainline Plumbing Inc. of Escalon, CA. How we collect, use, share and protect your information, our SMS policy, and your California CCPA and CPRA rights.";

const EFFECTIVE = "March 25, 2026";

type Section = { id: string; title: string; body: React.ReactNode };

const sections: Section[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    body: (
      <>
        <p>
          Mainline Plumbing Inc. ("Company," "we," "our," or "us") respects your privacy and is
          committed to protecting your personal information. This Privacy Policy applies to all
          information collected through our website, phone systems, messaging platforms, and
          services (collectively, "Services"). We operate in compliance with all applicable federal
          and California privacy laws, including the California Consumer Privacy Act (CCPA) and the
          California Privacy Rights Act (CPRA).
        </p>
        <div className="mt-4 border-l-4 border-brand-orange bg-muted/60 p-4 rounded-r">
          <p className="font-semibold text-navy">Important Notice</p>
          <p className="mt-1">
            Phone numbers and SMS opt-in data will not be shared, sold, or rented to third parties
            for marketing purposes. Consumers may opt out of messaging at any time by replying STOP.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "personal-information",
    title: "2. What is Personal Information",
    body: (
      <>
        <p>
          "Personal Information" means any information that identifies, relates to, or could
          reasonably be linked to you, including:
        </p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Service address</li>
          <li>Payment information</li>
          <li>Communication history</li>
        </ul>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "3. Information We Collect",
    body: (
      <>
        <p className="font-semibold text-navy">Information You Provide</p>
        <p>We collect information when you call or text our business, request service, fill out forms, or communicate with us. This may include:</p>
        <ul>
          <li>Contact information</li>
          <li>Service details</li>
          <li>Payment and billing information</li>
          <li>Communication records</li>
        </ul>
        <p className="font-semibold text-navy mt-5">Automatically Collected Information</p>
        <p>We may collect device information, website usage data, IP address, and browser type. This helps us improve performance and user experience.</p>
        <p className="font-semibold text-navy mt-5">Third-Party Sources</p>
        <p>We may receive information from platforms such as Google, Yelp, Angi, social media platforms, and CRM or service platforms.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Information",
    body: (
      <>
        <p>We use your information to:</p>
        <ul>
          <li>Schedule and deliver services</li>
          <li>Communicate with you</li>
          <li>Process payments</li>
          <li>Send service updates and reminders</li>
          <li>Improve our operations and customer experience</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p>We may also use data for internal analytics and performance tracking.</p>
      </>
    ),
  },
  {
    id: "sms",
    title: "5. SMS and Communication Policy",
    body: (
      <>
        <p>
          By providing your phone number, you consent to receive communications from Mainline
          Plumbing Inc. These may include appointment confirmations, service updates, and follow-up
          messages.
        </p>
        <p>
          You can opt out at any time by replying <strong>STOP</strong>. You may request help by
          replying <strong>HELP</strong>. We do not sell or share SMS opt-in data.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "6. Sharing of Information",
    body: (
      <>
        <p>We may share your information with:</p>
        <ul>
          <li>Service providers (payment processors, CRM systems)</li>
          <li>Internal team members</li>
          <li>Legal or regulatory authorities when required</li>
        </ul>
        <p>We do not sell personal information.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "7. Cookies and Tracking Technologies",
    body: (
      <>
        <p>Our website may use cookies and similar technologies to improve website performance, understand user behavior, and enhance user experience.</p>
        <p>You may disable cookies through your browser settings.</p>
      </>
    ),
  },
  {
    id: "retention",
    title: "8. Data Retention",
    body: (
      <>
        <p>We retain personal information only as long as necessary to complete services, meet legal requirements, and maintain business records.</p>
      </>
    ),
  },
  {
    id: "california-rights",
    title: "9. Your Privacy Rights (California Residents)",
    body: (
      <>
        <p>Under California law, you have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request deletion of your data</li>
          <li>Request correction of inaccurate data</li>
          <li>Opt out of data sharing, if applicable</li>
        </ul>
        <p>To make a request, contact us using the information below. We will respond within legally required timeframes.</p>
      </>
    ),
  },
  {
    id: "security",
    title: "10. Data Security",
    body: (
      <p>
        We implement physical, technical, and administrative safeguards to protect your data. While
        no system is 100% secure, we take reasonable steps to protect your information from
        unauthorized access.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "11. Children's Privacy",
    body: (
      <p>
        Our services are not intended for individuals under 13 years of age. We do not knowingly
        collect information from children.
      </p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy periodically. Updates will be posted on this page with the
        revised date.
      </p>
    ),
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Privacy Policy | Mainline Plumbing Inc." },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
              name: "Privacy Policy",
              description: DESC,
              dateModified: "2026-03-25",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Privacy Policy", item: URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Privacy Policy</span>
          </nav>
          <span className="eyebrow mt-6 inline-block">Your Information, Protected</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Privacy Policy</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            How Mainline Plumbing Inc. collects, uses, and protects your information, including our
            SMS policy and your California privacy rights.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
            <span><strong className="text-white">Effective Date:</strong> {EFFECTIVE}</span>
            <span><strong className="text-white">Last Updated:</strong> {EFFECTIVE}</span>
          </div>
          <div className="mt-7">
            <a href="tel:2098381000" className="btn-primary"><Phone className="size-4" /> (209) 838-1000</a>
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
              <li><a href="#contact" className="text-muted-foreground hover:text-brand-orange">13. Contact Information</a></li>
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
                <h2 className="text-xl font-bold text-navy border-l-4 border-brand-orange pl-4">13. Contact Information</h2>
                <div className="mt-3 pl-4 text-muted-foreground">
                  <p>If you have any questions regarding this Privacy Policy, please contact us:</p>
                  <address className="not-italic mt-4 border border-border rounded-lg p-5 bg-muted/40 text-navy">
                    <strong>Mainline Plumbing Inc.</strong>
                    <br />18332 Campbell Ave.
                    <br />Escalon, CA 95320
                    <br />Phone: <a href="tel:2098381000" className="text-brand-orange font-semibold hover:underline">(209) 838-1000</a>
                    <br />Email: <a href="mailto:Office@MainlinePlumber.com" className="text-brand-orange font-semibold hover:underline">Office@MainlinePlumber.com</a>
                    <br />Website: MainlinePlumber.com
                  </address>
                </div>
              </article>
            </div>

            <div className="mt-12 border border-border rounded-lg p-6 bg-muted/40 flex items-start gap-4">
              <ShieldCheck className="size-6 text-brand-orange shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Mainline Plumbing Inc. is a licensed California plumbing contractor, {LICENSE_LABEL}, bonded
                and insured. See our <Link to="/terms-and-conditions/" className="text-brand-orange font-semibold hover:underline">Terms and Conditions</Link>{" "}
                or <Link to="/contact-us/" className="text-brand-orange font-semibold hover:underline">contact us</Link> with any questions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
