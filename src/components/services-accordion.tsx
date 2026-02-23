'use client';

import { useState } from 'react';

export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    icon: string;
}

export function ServicesAccordion({ items }: { items: ServiceItem[] }) {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

    return (
        <div className="flex flex-col border-t border-gray-100 max-w-5xl mx-auto">
            {items.map((item) => {
                const isOpen = openId === item.id;

                return (
                    <div
                        key={item.id}
                        className="border-b border-gray-100"
                        onMouseEnter={() => setOpenId(item.id)}
                    >
                        <button
                            onClick={() => setOpenId(isOpen ? null : item.id)}
                            className="w-full flex items-center gap-6 py-8 text-left group"
                            aria-expanded={isOpen}
                        >
                            <div
                                className={`w-10 h-10 rounded-full flex flex-shrink-0 items-center justify-center transition-colors duration-300 ${isOpen
                                    ? 'text-black'
                                    : 'text-gray-500 group-hover:bg-gray-200'
                                    }`}
                            >
                                {isOpen ? (
                                    <svg width="14" height="2" viewBox="0 0 14 2" fill="currentColor">
                                        <rect width="14" height="2" rx="1" />
                                    </svg>
                                ) : (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                                        <rect y="6" width="14" height="2" rx="1" />
                                        <rect x="6" width="2" height="14" rx="1" />
                                    </svg>
                                )}
                            </div>
                            <h2 className="text-3xl md:text-4xl font-semibold flex-1 tracking-tight">
                                {item.title}
                            </h2>
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100 mb-8' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row gap-8 pl-16 pt-2">
                                <div className="flex-1">
                                    <p className="text-gray-700 leading-relaxed text-lg mb-8 max-w-xl">
                                        {item.description}
                                    </p>
                                    {item.tags && item.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-4 py-2 bg-gray-50 text-gray-800 text-sm font-medium rounded-full border border-gray-100"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div
                                    className={`hidden md:flex w-80 h-52 rounded-2xl bg-gradient-to-br ${item.gradient} items-center justify-center flex-shrink-0 shadow-inner`}
                                >
                                    <span className="text-7xl drop-shadow-sm">{item.icon}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
