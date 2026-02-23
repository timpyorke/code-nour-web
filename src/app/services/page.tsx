import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getPageBySlug } from '@/lib/pages';
import { ServicesAccordion, type ServiceItem } from '@/components/services-accordion';

const serviceItems: ServiceItem[] = [
    {
        id: 'android',
        icon: '🤖',
        title: 'Android Development',
        description:
            'Expert native Android app development using Kotlin and Java. We build high-performance applications that follow Material Design guidelines and deliver exceptional user experiences.',
        tags: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK'],
        gradient: 'from-green-50 to-green-200',
    },
    {
        id: 'ios',
        icon: '🍎',
        title: 'iOS Development',
        description:
            'Premium native iOS applications crafted with Swift and Objective-C. We focus on seamless performance, intuitive interfaces, and strict adherence to Apple\'s Human Interface Guidelines.',
        tags: ['Swift', 'SwiftUI', 'Objective-C', 'iOS SDK'],
        gradient: 'from-slate-50 to-slate-200',
    },
    {
        id: 'cross-platform',
        icon: '📱',
        title: 'Mobile Cross-Platform',
        description:
            'Efficient cross-platform mobile development to reach both iOS and Android users simultaneously without compromising on native-like performance and feel.',
        tags: ['Flutter', 'Dart', 'Web View'],
        gradient: 'from-blue-50 to-blue-200',
    },
    {
        id: 'web',
        icon: '🌐',
        title: 'Web Development',
        description:
            'Modern, responsive websites and web applications built with the latest technologies. We create fast, SEO-friendly experiences that scale perfectly across all devices.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        gradient: 'from-purple-50 to-purple-200',
    }
];

export default function ServicesPage() {
    const page = getPageBySlug('services');

    return (
        <main className="scroll-smooth bg-white">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 min-h-[60vh] flex flex-col justify-center">
                <div className="max-w-5xl mx-auto w-full">
                    <h1 className="text-5xl md:text-6xl md:text-7xl font-semibold mb-6 tracking-tight">
                        {page?.title ?? 'Our Services'}
                    </h1>
                    {page?.subtitle && (
                        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                            {page.subtitle}
                        </p>
                    )}
                </div>
            </section>

            {/* Service Accordion */}
            <section className="pb-32 px-6">
                <ServicesAccordion items={serviceItems} />
            </section>

            {/* CTA */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-semibold mb-6 tracking-tight">Ready to get started?</h2>
                    <p className="text-gray-600 mb-10 text-lg">
                        Let&apos;s discuss your project and find the perfect solution for
                        your needs.
                    </p>
                    <a
                        href="mailto:codenour.dev@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-medium transition-transform hover:scale-105"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
