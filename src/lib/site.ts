import { siteConfig } from "../data/site";

export function formatNaira(amount: number | string): string {
  if (typeof amount === "string" && amount.startsWith("₦")) {
    return amount;
  }
  const numeric = typeof amount === "string" ? parseFloat(amount.replace(/[^\d.]/g, "")) : amount;
  if (isNaN(numeric)) return "₦0";
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(numeric);
}

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}?text=${encoded}`;
}

export function getCanonicalUrl(pathname: string, site?: URL): URL {
  const base = site ?? new URL(siteConfig.url);
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(cleanPath, base);
}
