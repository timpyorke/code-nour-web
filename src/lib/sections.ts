import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SECTIONS_DIR = path.join(process.cwd(), "content", "sections");

export interface Section {
    id: string;
    title: string;
    subtitle?: string;
    order: number;
    content: string;
}

export function getSections(): Section[] {
    if (!fs.existsSync(SECTIONS_DIR)) return [];

    const files = fs.readdirSync(SECTIONS_DIR).filter((f) => f.endsWith(".md"));

    const sections: Section[] = files.map((file) => {
        const fullPath = path.join(SECTIONS_DIR, file);
        const raw = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(raw);

        return {
            id: data.id || file.replace(".md", ""),
            title: data.title || "",
            subtitle: data.subtitle,
            order: typeof data.order === "number" ? data.order : 99,
            content: (content || "").trim(),
        };
    });

    sections.sort((a, b) => a.order - b.order);
    return sections;
}

export function getSectionById(id: string): Section | null {
    const filePath = path.join(SECTIONS_DIR, `${id}.md`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(raw);

    return {
        id: data.id || id,
        title: data.title || "",
        subtitle: data.subtitle,
        order: typeof data.order === "number" ? data.order : 99,
        content: (content || "").trim(),
    };
}
