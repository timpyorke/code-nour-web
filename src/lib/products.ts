import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Product {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  icon: string;
  coverImage?: string;
  gradient: {
    from: string;
    to: string;
    hoverFrom: string;
    hoverTo: string;
  };
  colSpan: 1 | 2;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  tags?: string[];
  isVisible?: boolean;
  screenshots?: string[];
  privacyPolicy?: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content", "products");

function parseProduct(id: string, fileContent: string): Product {
  const { data, content } = matter(fileContent);
  
  return {
    id: data.id || id,
    title: data.title || "",
    description: content.trim(),
    shortDescription: data.shortDescription,
    icon: data.icon || "📦",
    coverImage: data.coverImage,
    gradient: {
      from: data.gradient?.from || "from-gray-50",
      to: data.gradient?.to || "to-gray-100",
      hoverFrom: data.gradient?.hoverFrom || "group-hover:from-gray-100",
      hoverTo: data.gradient?.hoverTo || "group-hover:to-gray-200",
    },
    colSpan: data.colSpan || 1,
    primaryButtonText: data.primaryButtonText,
    primaryButtonUrl: data.primaryButtonUrl,
    secondaryButtonText: data.secondaryButtonText,
    secondaryButtonUrl: data.secondaryButtonUrl,
    tags: Array.isArray(data.tags) ? data.tags : [],
    isVisible: typeof data.isVisible === "boolean" ? data.isVisible : true,
    screenshots: Array.isArray(data.screenshots) ? data.screenshots : [],
    privacyPolicy: data.privacyPolicy || "",
  };
}

export function getProducts(): Product[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const items = fs.readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const fullPath = path.join(CONTENT_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      return parseProduct(file.replace(".md", ""), raw);
    })
    .filter((p) => p.isVisible);

  return items.sort((a, b) => {
    if (a.id === "more") return 1;
    if (b.id === "more") return -1;
    return a.title.localeCompare(b.title);
  });
}

export function getAllProductIds(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs.readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(".md", ""));
}

export function getProductById(id: string): Product | null {
  const filePath = path.join(CONTENT_DIR, `${id}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  return parseProduct(id, raw);
}
