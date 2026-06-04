export const BUSINESS_NAME = "Sakshi Home Packers and Movers";
export const SITE_URL = "https://sakshihomepackersandmovers.in";
export const PHONE = "8095500072";
export const EMAIL = "sakshihomepackers@gmail.com";
export const FULL_ADDRESS =
  "1st Floor, 587/C, ACES Layout, A Block, West Zone, Kudlu, Bangalore, Bengaluru Urban, Karnataka - 560068";

const defaultKeywords =
  "best packers and movers in bangalore, best packers and movers, packers and movers, packers and movers bangalore, packers movers bangalore, house shifting services, local packers and movers";

const page = (path, title, description, keywords = defaultKeywords) => ({
  title,
  description,
  canonical: `${SITE_URL}${path === "/" ? "/" : path}`,
  keywords
});

const blog = (slug, title, description, keywords = defaultKeywords) =>
  page(`/blog-details/${slug}`, title, description, keywords);

const seoMap = {
  "/": page(
    "/",
    "Best Packers and Movers in Bangalore | Sakshi Home Packers and Movers",
    "Trusted Packers and Movers in Bangalore for home shifting, office shifting, packing and local relocation support from Sakshi Home Packers and Movers."
  ),
  "/about": page(
    "/about",
    "About Sakshi Home Packers and Movers | Bangalore Moving Company",
    "Learn about Sakshi Home Packers and Movers, a Bangalore relocation team offering safe packing, home shifting, office moving and local transport support."
  ),
  "/services": page(
    "/services",
    "Packers and Movers Services in Bangalore | Sakshi Home Packers and Movers",
    "Explore packers and movers services in Bangalore including home shifting, office shifting, packing, loading, unloading, warehousing and moving insurance."
  ),
  "/projects": page(
    "/projects",
    "Relocation Projects in Bangalore | Sakshi Home Packers and Movers",
    "View relocation and delivery project highlights from Sakshi Home Packers and Movers for safe home, office and goods transport across Bangalore."
  ),
  "/gallery": page(
    "/gallery",
    "Moving Gallery | Sakshi Home Packers and Movers Bangalore",
    "See gallery highlights from Sakshi Home Packers and Movers, showing safe packing, loading, transport and relocation work around Bangalore."
  ),
  "/faq": page(
    "/faq",
    "Packers and Movers FAQ in Bangalore | Sakshi Home Packers and Movers",
    "Find answers about packers and movers, local shifting, packing materials, booking times and transport services from Sakshi Home Packers and Movers."
  ),
  "/blog-grid": page(
    "/blog-grid",
    "Moving Tips Blog | Sakshi Home Packers and Movers Bangalore",
    "Read practical moving tips from Sakshi Home Packers and Movers for house shifting, office relocation, packing, transport and local moves in Bangalore."
  ),
  "/contact": page(
    "/contact",
    "Contact Sakshi Home Packers and Movers in Bangalore | Get a Quote",
    "Contact Sakshi Home Packers and Movers in Bangalore for home shifting, office shifting, packing, loading, warehousing and relocation support."
  ),
  "/home-shifting": page(
    "/home-shifting",
    "Home Shifting Services in Bangalore | Sakshi Home Packers and Movers",
    "Book home shifting services in Bangalore with secure packing, careful loading, safe transport and organized unloading by Sakshi Home Packers and Movers."
  ),
  "/HomeShiftingServices": page(
    "/HomeShiftingServices",
    "Home Shifting Services in Bangalore | Sakshi Home Packers and Movers",
    "Choose local house shifting services in Bangalore with secure packing, careful loading and safe transportation by Sakshi Home Packers and Movers."
  ),
  "/office-shifting": page(
    "/office-shifting",
    "Office Shifting Services in Bangalore | Sakshi Home Packers and Movers",
    "Plan office shifting in Bangalore with professional movers for organized packing, secure loading, careful transport and timely relocation support."
  ),
  "/OfficeShiftingServices": page(
    "/OfficeShiftingServices",
    "Office Packers and Movers in Bangalore | Sakshi Home Packers and Movers",
    "Move offices in Bangalore with professional office packers and movers offering secure packing, equipment handling and timely relocation support."
  ),
  "/loading-unloading": page(
    "/loading-unloading",
    "Loading and Unloading Services in Bangalore | Sakshi Home Packers and Movers",
    "Get careful loading and unloading services in Bangalore with trained movers for household goods, office items, heavy furniture and safe transport."
  ),
  "/CarTransportation": page(
    "/CarTransportation",
    "Car Transportation Services in Bangalore | Sakshi Home Packers and Movers",
    "Arrange car transportation in Bangalore with planned pickup, careful handling and relocation support from Sakshi Home Packers and Movers."
  ),
  "/packing-unpacking": page(
    "/packing-unpacking",
    "Packing and Unpacking Services in Bangalore | Sakshi Home Packers and Movers",
    "Use professional packing and unpacking services in Bangalore for household goods, fragile items, furniture and office relocation requirements."
  ),
  "/BikeTransportation": page(
    "/BikeTransportation",
    "Bike Transportation Bangalore | Sakshi Home Packers and Movers",
    "Move your bike safely in Bangalore with secure packing, careful loading, vehicle transport support and guidance from Sakshi Home Packers and Movers."
  ),
  "/warehouse-services": page(
    "/warehouse-services",
    "Warehouse and Storage Services in Bangalore | Sakshi Home Packers and Movers",
    "Use warehouse and storage services in Bangalore for household or commercial goods with safe handling, inventory support and flexible relocation help."
  ),
  "/Warehousing": page(
    "/Warehousing",
    "Warehousing Services in Bangalore | Sakshi Home Packers and Movers",
    "Secure warehousing services in Bangalore for relocation goods, business inventory and short term storage from Sakshi Home Packers and Movers."
  ),
  "/insurance-services": page(
    "/insurance-services",
    "Moving Insurance Support in Bangalore | Sakshi Home Packers and Movers",
    "Understand moving insurance support in Bangalore for protected relocation of valuable household, office and transport goods during a move."
  ),
  "/branches": page(
    "/branches",
    "Bangalore Relocation Network | Sakshi Home Packers and Movers",
    "Find the relocation service network for Sakshi Home Packers and Movers, supporting local packers and movers requirements in Bangalore and beyond."
  ),
  "/testimonials": page(
    "/testimonials",
    "Customer Feedback | Sakshi Home Packers and Movers Bangalore",
    "Read customer feedback for Sakshi Home Packers and Movers, trusted for safe packing, local shifting, careful transport and relocation support."
  ),
  "/blog-details/blog-1": blog(
    "blog-1",
    "How to Choose the Best Packers and Movers in Bangalore",
    "Learn how to choose the best packers and movers in Bangalore by checking experience, packing quality, transparent pricing, reviews and support."
  ),
  "/blog-details/blog-2": blog(
    "blog-2",
    "Complete Home Shifting Checklist for Bangalore Moves",
    "Use this home shifting checklist for Bangalore moves to plan packing, labels, utility updates, transport timing and safe unpacking after relocation."
  ),
  "/blog-details/blog-3": blog(
    "blog-3",
    "Packing Materials Required for Safe House Shifting",
    "Know the packing materials required for safe house shifting, including cartons, bubble wrap, tape, labels, blankets and protection for fragile goods."
  ),
  "/blog-details/blog-4": blog(
    "blog-4",
    "How Much Do Packers and Movers Charge in Bangalore",
    "Understand how packers and movers charges in Bangalore depend on distance, goods volume, packing material, manpower, floor access and service scope."
  ),
  "/blog-details/blog-5": blog(
    "blog-5",
    "Office Relocation Planning Guide for Businesses",
    "Plan office relocation with a practical guide covering inventory, IT equipment, packing, moving schedules, staff coordination and safe transport."
  ),
  "/blog-details/blog-6": blog(
    "blog-6",
    "Safe Bike Transportation Tips During Relocation",
    "Follow safe bike transportation tips for relocation, from cleaning and documents to fuel checks, protective packing, loading and delivery inspection."
  ),
  "/blog-details/blog-7": blog(
    "blog-7",
    "Professional Packing Tips to Prevent Damage",
    "Use professional packing tips to prevent damage during shifting, including sorting, cushioning, labeling, weight control and fragile item protection."
  ),
  "/blog-details/blog-8": blog(
    "blog-8",
    "How to Prepare Furniture Before Moving",
    "Prepare furniture before moving with cleaning, dismantling, wrapping, labeling hardware, protecting corners and planning safe loading for relocation."
  ),
  "/blog-details/blog-9": blog(
    "blog-9",
    "Benefits of Hiring Professional Packers and Movers",
    "Explore the benefits of hiring professional packers and movers for safe packing, trained handling, faster relocation and reduced moving stress."
  ),
  "/blog-details/blog-10": blog(
    "blog-10",
    "Local House Shifting vs Intercity Relocation Explained",
    "Compare local house shifting and intercity relocation, including planning, packing, transport timing, cost factors and delivery coordination."
  )
};

export function metadataFor(route) {
  const item = seoMap[route] || seoMap["/"];
  return {
    title: item.title,
    description: item.description,
    keywords: item.keywords,
    robots: { index: true, follow: true },
    alternates: { canonical: item.canonical },
    openGraph: {
      title: item.title,
      description: item.description,
      url: item.canonical,
      siteName: BUSINESS_NAME,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary",
      title: item.title,
      description: item.description,
      site: BUSINESS_NAME
    }
  };
}

export function allSeoRoutes() {
  return Object.keys(seoMap);
}
