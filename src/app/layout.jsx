import "./variables.css";
import "./original.css";
import "./globals.css";
import SiteBehavior from "@/components/siteBehavior";
import { metadataFor } from "@/data/seoData";

export const metadata = {
  metadataBase: new URL("https://omrelocationmoversandpackers.in"),
  ...metadataFor("/"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://omrelocationmoversandpackers.in/#localbusiness",
    name: "Om Relocation Packers and Movers",
    url: "https://omrelocationmoversandpackers.in/",
    image: "https://omrelocationmoversandpackers.in/favicon.svg",
    telephone: "+91-7228-8025-65",
    email: "info@omrelocationmoversandpackers.in",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN"
    },
    areaServed: ["Ahmedabad", "Gujarat", "India"],
    sameAs: ["https://omrelocationmoversandpackers.in/"]
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://omrelocationmoversandpackers.in/#organization",
    name: "Om Relocation Packers and Movers",
    url: "https://omrelocationmoversandpackers.in/",
    logo: "https://omrelocationmoversandpackers.in/favicon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7228-8025-65",
      contactType: "customer service",
      areaServed: "IN"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://omrelocationmoversandpackers.in/#website",
    name: "Om Relocation Packers and Movers",
    url: "https://omrelocationmoversandpackers.in/"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://omrelocationmoversandpackers.in/services#service",
    name: "Packers and Movers Services in Ahmedabad",
    provider: {
      "@id": "https://omrelocationmoversandpackers.in/#localbusiness"
    },
    areaServed: {
      "@type": "City",
      name: "Ahmedabad"
    },
    serviceType: "Home shifting, office shifting, packing, loading, warehousing and moving insurance"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do Om Relocation Packers and Movers provide home shifting services in Ahmedabad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Om Relocation Packers and Movers provide home shifting, office relocation, packing, loading, warehousing and related moving services in Ahmedabad."
        }
      },
      {
        "@type": "Question",
        name: "How can I contact Om Relocation Packers and Movers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Om Relocation Packers and Movers through the phone and email details listed on the website contact page."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://omrelocationmoversandpackers.in/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://omrelocationmoversandpackers.in/services"
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
