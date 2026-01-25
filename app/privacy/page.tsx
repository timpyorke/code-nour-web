import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function getPrivacyContent() {
    const filePath = path.join(process.cwd(), 'content', 'privacy.md');
    const raw = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(raw);
    return content;
}

export default function PrivacyPage() {
    const content = getPrivacyContent();

    return (
        <main className="scroll-smooth">
            <Header />

            <section className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 shadow-sm">
                    <article className="prose prose-gray max-w-none prose-headings:font-light prose-h1:text-5xl prose-h1:mb-8 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:my-6 prose-li:my-2 prose-strong:text-gray-900 prose-strong:font-medium prose-hr:my-8">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    );
}
