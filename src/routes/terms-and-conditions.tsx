import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ChevronRight, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SITE_URL, LICENSE_LABEL } from "@/lib/site";

const URL = `${SITE_URL}/terms-and-conditions/`;
const DESC =
  "Terms and Conditions for Mainline Plumbing Inc. of Escalon, CA. Website use, service agreements, payment terms, SMS terms, liability, and California governing law.";

const EFFECTIVE = "March 25, 2026";

type Section = { id: string; title: string; body: React.ReactNode };

const sections: Section[] = [
  {
    id: "use-of-website",
    title: "1. Use of Website",
    body: (
      <>
        <p>The Website is provided for informational and service-related purposes. Visitors may:</p>
        <ul>
          <li>View publicly available content</li>
          <li>Submit service requests</li>
          <li>Contact our team</li>
        </ul>
        <p>No login is required to access general Website content.</p>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "2. Eligibility",
    body: (
      <p>
        The Website is intended for individuals 13 years of age or older. If you are under the age
        of 18, you must use this Website with the involvement of a parent or legal guardian.
      </p>
    ),
  },
  {
    id: "services-provided",
    title: "3. Services Provided",
    body: (
      <>
        <p>
          Mainline Plumbing provides residential and commercial plumbing services throughout
          Escalon, Modesto, Turlock, and the surrounding Central Valley (209 &amp; 350).
        </p>
        <p>All services are subject to availability, scheduling, site conditions, and final inspection.</p>
        <p>
          Estimates provided are based on initial information and may change based on actual
          conditions discovered during service.
        </p>
      </>
    ),
  },
  {
    id: "appointments",
    title: "4. Appointments and Service Agreements",
    body: (
      <>
        <p>By scheduling service with Mainline Plumbing, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Allow access to the service location</li>
          <li>Comply with agreed scheduling windows</li>
        </ul>
        <p>We reserve the right to reschedule due to unforeseen circumstances, and to refuse service for safety, legal, or operational reasons.</p>
      </>
    ),
  },
  {
    id: "payment",
    title: "5. Payment Terms",
    body: (
      <>
        <p>Payment for services is due upon completion unless otherwise agreed in writing.</p>
        <p>We accept approved forms of payment, which may include credit cards, debit cards, and financing options where applicable.</p>
        <p>Failure to provide payment may result in service delays, additional fees, or collection actions if necessary.</p>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "6. Cancellation and Rescheduling",
    body: (
      <p>
        Customers are encouraged to provide notice if they need to cancel or reschedule an
        appointment. Missed appointments or late cancellations may be subject to a service fee.
      </p>
    ),
  },
  {
    id: "sms-terms",
    title: "7. SMS and Communication Terms",
    body: (
      <>
        <p>By providing your phone number, you consent to receive text messages (SMS/MMS) from Mainline Plumbing. These messages may include:</p>
        <ul>
          <li>Appointment confirmations</li>
          <li>Service updates</li>
          <li>Scheduling coordination</li>
          <li>Follow-ups</li>
        </ul>
        <p>
          Message frequency varies. You may opt out at any time by replying <strong>STOP</strong>,
          and request help by replying <strong>HELP</strong>. Message and data rates may apply
          depending on your wireless carrier.
        </p>
        <div className="mt-4 border-l-4 border-brand-orange bg-muted/60 p-4 rounded-r">
          <p className="text-navy">
            Phone numbers and SMS opt-in data will not be shared, sold, or rented to third parties
            for marketing purposes.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "call-recording",
    title: "8. Call Recording and Communication Monitoring",
    body: (
      <>
        <p>Calls to and from Mainline Plumbing may be recorded or monitored for quality assurance, training purposes, and customer service improvement.</p>
        <p>By contacting us, you consent to this recording.</p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    body: (
      <>
        <p>All content on this Website, including text, images, graphics, videos, and branding, is the property of Mainline Plumbing Inc. or its licensors and is protected by applicable intellectual property laws.</p>
        <p>You may not reproduce, distribute, or use any content without written permission.</p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "10. Third-Party Services and Links",
    body: (
      <>
        <p>Our Website may contain links to third-party services or platforms, including scheduling systems, payment processors, or review platforms.</p>
        <p>We are not responsible for third-party content, third-party policies, or third-party service performance. Use of third-party services is at your own risk.</p>
      </>
    ),
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    body: (
      <>
        <p>To the fullest extent permitted by law, Mainline Plumbing Inc. shall not be liable for indirect or incidental damages, delays due to unforeseen conditions, or service interruptions beyond our control.</p>
        <p>Our liability is limited to the value of the services provided.</p>
      </>
    ),
  },
  {
    id: "california-privacy",
    title: "12. California Privacy Rights (CCPA/CPRA)",
    body: (
      <>
        <p>If you are a California resident, you have the right to:</p>
        <ul>
          <li>Request access to your personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Request correction of inaccurate data</li>
          <li>Opt out of certain data uses</li>
        </ul>
        <p>
          To exercise your rights, please contact us using the information below. We do not sell
          personal information. Full detail lives in our Privacy Policy.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "13. Compliance With California Law",
    body: (
      <p>
        These Terms are governed by the laws of the State of California. Any disputes shall be
        handled in a court of competent jurisdiction within Stanislaus County, California.
      </p>
    ),
  },
  {
    id: "dmca",
    title: "14. Digital Millennium Copyright Act (DMCA)",
    body: (
      <p>
        We respect intellectual property rights and comply with applicable copyright laws. If you
        believe content on our Website infringes your rights, please contact us and we will review
        and take appropriate action.
      </p>
    ),
  },
  {
    id: "modifications",
    title: "15. Modifications to Terms",
    body: (
      <p>
        We reserve the right to update or modify these Terms at any time without prior notice.
        Continued use of the Website constitutes acceptance of the updated Terms.
      </p>
    ),
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Mainline Plumbing Inc. Escalon, CA" },
      { name: "description", content: DESC },
      { property: "og:title", content: "Terms and Conditions | Mainline Plumbing Inc." },
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
              name: "Terms and Conditions",
              description: DESC,
              dateModified: "2026-03-25",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              publisher: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Terms and Conditions", item: URL },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <section className="bg-navy-deep text-white py-14 md:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-wider text-white/60 flex items-center gap-1">
            <Link to="/" className="hover:text-accent">Home</Link>
            <ChevronRight className="size-3" />
            <span className="text-accent">Terms and Conditions</span>
          </nav>
          <span className="eyebrow mt-6 inline-block">Straight Terms, No Fine Print Games</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Terms and Conditions</h1>
          <p className="mt-4 text-white/85 max-w-2xl">
            By accessing our website or scheduling service with Mainline Plumbing Inc., you agree to
            the terms below. If you do not agree, please do not use our website or services.
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
              <li><a href="#contact" className="text-muted-foreground hover:text-brand-orange">16. Contact Information</a></li>
            </ul>
          </nav>

          <div className="max-w-3xl">
            <p className="text-muted-foreground">
              Mainline Plumbing Inc. ("Company," "we," "us," or "our") provides plumbing services and
              access to our website located at MainlinePlumber.com (the "Website"). By accessing or
              using our Website or services, you agree to be bound by these Terms and Conditions
              ("Terms").
            </p>

            <div className="mt-10 space-y-10">
              {sections.map((s) => (
                <article key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-xl font-bold text-navy border-l-4 border-brand-orange pl-4">{s.title}</h2>
                  <div className="mt-3 pl-4 space-y-3 text-muted-foreground [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ul]:mt-2">
                    {s.body}
                  </div>
                </article>
              ))}

              <article id="contact" className="scroll-mt-28">
                <h2 className="text-xl font-bold text-navy border-l-4 border-brand-orange pl-4">16. Contact Information</h2>
                <div className="mt-3 pl-4 text-muted-foreground">
                  <p>If you have any questions regarding these Terms and Conditions, please contact us:</p>
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
                and insured. See our <Link to="/privacy-policy/" className="text-brand-orange font-semibold hover:underline">Privacy Policy</Link>{" "}
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
