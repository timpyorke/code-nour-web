'use client';

import { useState, useEffect } from 'react';
import type { Product } from '@/lib/products';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ProductDetailTabsProps {
  product: Product;
}

type Tab = 'overview' | 'screenshot' | 'privacy-policy';

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'screenshot', label: 'Screenshot' },
  { id: 'privacy-policy', label: 'Privacy Policy' },
];

const VALID_TABS = new Set<Tab>(['overview', 'screenshot', 'privacy-policy']);

function hashToTab(hash: string): Tab {
  const id = hash.replace('#', '') as Tab;
  return VALID_TABS.has(id) ? id : 'overview';
}

export function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  useEffect(() => {
    setActiveTab(hashToTab(window.location.hash));

    const onHashChange = () => setActiveTab(hashToTab(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  function switchTab(tab: Tab) {
    history.pushState(null, '', `#${tab}`);
    setActiveTab(tab);
  }

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      {/* Tab Bar */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="prose prose-gray max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:my-1 prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-500 prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:rounded prose-hr:border-gray-200">
          {product.description ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.description}</ReactMarkdown>
          ) : (
            <p className="text-gray-500">No overview available.</p>
          )}
        </div>
      )}

      {/* Screenshot */}
      {activeTab === 'screenshot' && (
        <div>
          {product.screenshots && product.screenshots.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {product.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden bg-gray-100 aspect-[9/16]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${product.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-gray-400 gap-3">
              <span className="text-5xl">🖼️</span>
              <p className="text-base">No screenshots available.</p>
            </div>
          )}
        </div>
      )}

      {/* Privacy Policy */}
      {activeTab === 'privacy-policy' && (
        <div className="prose prose-gray max-w-none prose-headings:font-light prose-headings:text-gray-900 prose-h1:text-3xl prose-h1:mb-2 prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-black prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-ul:text-gray-600 prose-ol:text-gray-600 prose-li:my-1 prose-blockquote:border-l-gray-300 prose-blockquote:text-gray-500 prose-hr:border-gray-200 prose-hr:my-8">
          {product.privacyPolicy ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{product.privacyPolicy}</ReactMarkdown>
          ) : (
            <p className="text-gray-500">No privacy policy available.</p>
          )}
        </div>
      )}
    </div>
  );
}
