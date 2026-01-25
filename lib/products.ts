export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: {
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
  };
  colSpan: 1 | 2;
  buttonVariant: "primary" | "secondary";
  buttonText: string;
  tags?: string[];
  isVisible?: boolean;
  url?: string;
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "products");

export function getProducts(): Product[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"));

  const items: Product[] = files.map((file) => {
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(raw);

    const product: Product = {
      id: data.id,
      title: data.title,
      description: (content || "").trim(),
      icon: data.icon,
      gradient: {
        from: data.gradient?.from,
        to: data.gradient?.to,
        hoverFrom: data.gradient?.hoverFrom,
        hoverTo: data.gradient?.hoverTo,
      },
      colSpan: data.colSpan,
      buttonVariant: data.buttonVariant,
      buttonText: data.buttonText,
      tags: Array.isArray(data.tags) ? data.tags : [],
      isVisible: typeof data.isVisible === "boolean" ? data.isVisible : true,
      url: typeof data.url === "string" ? data.url : undefined,
    };

    return product;
  });

  // Filter to visible items only
  const visible = items.filter((p) => p.isVisible === true);

  // Optional: keep "more" card at the end if present
  visible.sort((a, b) => {
    if (a.id === "more") return 1;
    if (b.id === "more") return -1;
    return a.title.localeCompare(b.title);
  });
  return visible;
}

export function getProductById(id: string): Product | null {
  const filePath = path.join(CONTENT_DIR, `${id}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    id: data.id,
    title: data.title,
    description: (content || "").trim(),
    icon: data.icon,
    gradient: {
      from: data.gradient?.from,
      to: data.gradient?.to,
      hoverFrom: data.gradient?.hoverFrom,
      hoverTo: data.gradient?.hoverTo,
    },
    colSpan: data.colSpan,
    buttonVariant: data.buttonVariant,
    buttonText: data.buttonText,
    tags: Array.isArray(data.tags) ? data.tags : [],
    isVisible: typeof data.isVisible === "boolean" ? data.isVisible : true,
    url: typeof data.url === "string" ? data.url : undefined,
  };
}
