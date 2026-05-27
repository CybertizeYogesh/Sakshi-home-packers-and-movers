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
  "/CarTransportation": "loading-unloading",
  "/BikeTransportation": "packing-unpacking",
  "/blog-details/blog-1": "blog-details__blog-1",
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
