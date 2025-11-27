"use client";

import React from "react";

const items = [
  "AI Powered Energy Resilience Data Analytics",
  "AI Powered Agriculture Resilience Data Analytics",
  "AI Powered Water Resilience Data Analytics",
  "AI Powered Health Resilience Data Analytics",
  "AI Powered Financial Resilience Data Analytics",
  "AI Powered Coastal Resilience Data Analytics",
  "AI Powered Transport Resilience Data Analytics",
  "AI Powered Infrastructure Resilience Data Analytics",
];

const AIResilienceList: React.FC = () => {
  return (
    <section className="bg-slate-50">
      <div className="content-width container mx-auto px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3">
            AI Powered Resilience Data Analytics
          </h2>
          <p className="text-sm md:text-base text-slate-600">
            Our AI-powered resilience analytics portfolio supports decision-making across key sectors:
          </p>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white/80 shadow-sm px-4 py-6 md:px-8 md:py-8">
          <ul className="grid gap-2 text-xs md:text-sm text-slate-800 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AIResilienceList;
