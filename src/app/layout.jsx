import "./variables.css";
import "./original.css";
import "./globals.css";
import SiteBehavior from "@/components/siteBehavior";
import { faqs } from "@/data/faqData";
import { BUSINESS_NAME, EMAIL, PHONE, SITE_URL, metadataFor } from "@/data/seoData";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...metadataFor("/"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/favicon.svg"
  },
  manifest: "/site.webmanifest"
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/favicon.svg`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, 587/C, ACES Layout, A Block, West Zone, Kudlu",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCounty: "Bengaluru Urban",
      postalCode: "560068",
      addressCountry: "IN"
    },
    areaServed: ["Bangalore", "Bengaluru Urban", "Karnataka", "India"],
    sameAs: [`${SITE_URL}/`]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/favicon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      email: EMAIL,
      contactType: "customer service",
      areaServed: "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS_NAME,
    url: `${SITE_URL}/`
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#service`,
    name: "Packers and Movers Services in Bangalore",
    provider: {
      "@id": `${SITE_URL}/#localbusiness`
    },
    areaServed: {
      "@type": "City",
      name: "Bangalore"
    },
    serviceType: "Home shifting, office shifting, packing, loading, warehousing and moving insurance"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`
      }
    ]
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <SiteBehavior />
      </body>
    </html>
  );
}
