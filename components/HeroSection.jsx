'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm install tonerd');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-28 overflow-hidden bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
      {/* Glowing Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute bottom-64 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[600px] h-[100px] rounded-full blur-3xl opacity-30 bg-blue-950 dark:bg-green-200 scale-y-75"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-neutral-900 dark:text-neutral-100 leading-tight mb-6"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Elevate your UI instantly with{' '}
          <span className="underline decoration-4 decoration-orange-500">
            Tone
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
              RD
            </span>
          </span>
        </h1>

        {/* Description */}
        <p
          className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mt-4 max-w-3xl mx-auto"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Create beautiful animation buttons instantly with ToneRD — just swap a single Tailwind class.
        </p>

        {/* Code Bar */}
        <div
          className="relative mt-12 max-w-lg mx-auto rounded-lg bg-neutral-900 text-neutral-100 text-left shadow-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          {/* Terminal Body */}
          <div className="flex items-center justify-between px-4 py-5 font-mono text-lg">
            <div className="flex items-center gap-2">
              <Terminal size={20} className="text-green-400" />
              <code className="text-green-300">npm install tonerd</code>
            </div>
            <button
              onClick={handleCopy}
              className="ml-4 p-1 text-neutral-400 hover:text-neutral-200 transition"
              aria-label="Copy to clipboard"
            >
              {copied ? <Check size={20} className="text-green-400" /> : <Copy size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
