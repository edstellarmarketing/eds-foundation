import "./globals.css";
import type { Metadata } from "next";

const SITE_URL = "https://www.edstellarfoundation.org";
const TITLE = "Edstellar Foundation | Global Community Skilling NGO";
const DESCRIPTION =
  "Edstellar Foundation delivers 22 community skilling courses across financial, digital, employability & entrepreneurship pillars for underserved communities.";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const OG_IMAGE_ALT =
  "Edstellar Foundation, Skilling Communities. Building Futures.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Edstellar Foundation",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "NGO",
      "@id": `${SITE_URL}/#organization`,
      name: "Edstellar Foundation",
      alternateName:
        "Edstellar Foundation, Skilling Communities. Building Futures.",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: "https://cdn.prod.website-files.com/6482a3cf7db698c2a80cc5e6/66c2ce6ee9d04908dc5e7eea_139%20x%2050%20(1).svg",
      },
      description:
        "Edstellar Foundation delivers practical, community-based skilling to underserved communities worldwide, equipping women, youth, small business owners, and first-time job seekers with financial, digital, employability, and entrepreneurship skills.",
      email: "hello@edstellarfoundation.org",
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      knowsAbout: [
        "Community skilling",
        "Financial literacy",
        "Digital literacy",
        "Online safety",
        "Employability skills",
        "Entrepreneurship training",
        "Career guidance",
        "Workforce development",
        "Economic mobility",
      ],
      parentOrganization: {
        "@type": "Organization",
        name: "Edstellar",
        url: "https://www.edstellar.com/",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Edstellar Foundation",
      description: "Skilling Communities. Building Futures.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      name: "Pillars of Community Skilling",
      description:
        "Six pillars under which Edstellar Foundation delivers 22 community skilling courses to underserved communities worldwide.",
      numberOfItems: 6,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Financial Empowerment",
          description:
            "Savings, banking, credit, and accessing government schemes. 4 courses, 12–15 hours.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Digital Literacy & Technology",
          description:
            "Smartphones, internet, Canva, Google Sheets, and AI tools. 7 courses, 18–25 hours.",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Online Safety",
          description:
            "Cybersecurity, scam prevention, and teen digital safety. 3 courses, 8–10 hours.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Employability & Workplace Skills",
          description:
            "Communication, resume, interview skills, and workplace etiquette. 4 courses, 10–14 hours.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Entrepreneurship & Income Generation",
          description:
            "Micro-business, digital marketing, and startup essentials. 3 courses, 10–12 hours.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Career Guidance",
          description:
            "Academic and career path planning for students. 1 course, 6–8 hours.",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
