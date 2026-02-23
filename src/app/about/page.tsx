import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="scroll-smooth bg-white min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 min-h-[60vh] flex flex-col justify-center">
                <div className="max-w-5xl mx-auto w-full">
                    <h1 className="text-5xl md:text-6xl md:text-7xl font-semibold mb-6 tracking-tight">
                        About Code Nour
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
                        I am a solo developer passionate about building high-quality, impactful software solving real-world problems.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="pb-32 px-6">
                <div className="max-w-4xl mx-auto flex flex-col gap-16 items-center">
                    <div className="w-full max-w-2xl bg-gray-50 rounded-3xl p-12 flex flex-col items-center justify-center text-center shadow-inner">
                        <div className="w-24 h-24 bg-[#FF7034] text-black rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform hover:scale-110">
                            <span className="text-4xl">👨‍💻</span>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2">Solo Developer</h3>
                        <p className="text-gray-500">Crafting code with care, from concept to deployment.</p>
                    </div>
                    <div className="w-full space-y-6 text-lg text-gray-700 leading-relaxed text-center">
                        <p>
                            Welcome to Code Nour. I started this journey as a solo developer with a simple goal:
                            to create powerful, user-friendly applications that amplify productivity. Without the overhead
                            of a massive agency, I am able to move quickly, stay close to the code, and ensure
                            every product meets my relentless standard for quality.
                        </p>
                        <p>
                            Whether it's a cross-platform mobile app, a niche utility tool, or an expansive web platform,
                            my focus remains on rigorous engineering and elegant design. Code Nour is the culmination
                            of years of experience packed into software built for everyone.
                        </p>
                        <p>
                            When you use a Code Nour product, you're interacting with software crafted with meticulous care by a single, dedicated builder.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
