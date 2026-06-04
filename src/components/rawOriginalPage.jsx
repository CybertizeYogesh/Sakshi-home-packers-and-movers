import fs from "node:fs";
import path from "node:path";

const aliases = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/projects": "projects",
  "/gallery": "projects",
  "/faq": "faq",
  "/blog-grid": "blog-grid",
  "/contact": "contact",
  "/home-shifting": "home-shifting",
  "/HomeShiftingServices": "home-shifting",
  "/office-shifting": "office-shifting",
  "/OfficeShiftingServices": "office-shifting",
  "/loading-unloading": "loading-unloading",
  "/packing-unpacking": "packing-unpacking",
  "/warehouse-services": "warehouse-services",
  "/Warehousing": "warehouse-services",
  "/insurance-services": "insurance-services",
  "/CarTransportation": "car-transportation",
  "/BikeTransportation": "bike-transportation",
  "/blog-details/blog-1": "blog-details__blog-1",
  "/blog-details/blog-2": "blog-details__blog-2",
  "/blog-details/blog-3": "blog-details__blog-3",
  "/blog-details/blog-4": "blog-details__blog-4",
  "/blog-details/blog-5": "blog-details__blog-5",
  "/blog-details/blog-6": "blog-details__blog-6",
  "/blog-details/blog-7": "blog-details__blog-7",
  "/blog-details/blog-8": "blog-details__blog-8",
  "/blog-details/blog-9": "blog-details__blog-9",
  "/blog-details/blog-10": "blog-details__blog-10",
  "/branches": "home",
  "/testimonials": "home"
};

export function getRawPageKey(route) {
  return aliases[route] || "home";
}

export default function RawOriginalPage({ route }) {
  const key = getRawPageKey(route);
  const filePath = path.join(process.cwd(), "public", "original-pages", `${key}.html`);
  const html = fs.readFileSync(filePath, "utf8");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
