import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-200">404</h1>
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Page Not Found</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-full font-medium transition-transform hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
