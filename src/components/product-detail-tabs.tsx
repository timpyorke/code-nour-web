'use client';

import { useState } from 'react';
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

export function ProductDetailTabs({ product }: ProductDetailTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  return (
    <div className="max-w-4xl mx-auto px-6 pb-24">
      {/* Tab Bar */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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
        <div className="prose prose-gray max-w-none prose-headings:font-light prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:my-6 prose-li:my-2">
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
        <div className="prose prose-gray max-w-none prose-headings:font-light prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-10 prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:my-6 prose-li:my-2 prose-strong:text-gray-900 prose-strong:font-medium prose-hr:my-8">
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
