'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Terminal, Check, Copy } from 'lucide-react';

const variants = ['default', 'secondary', 'destructive', 'outline', 'link'];

export default function ButtonShowcasePage() {
  const [selectedVariant, setSelectedVariant] = useState('default');
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const codeString = `import { Button } from '@/components/ui/Button';

export default function Example() {
  return (
    <Button variant="${selectedVariant}">${selectedVariant}</Button>
  );
}`;

  return (
    <div className="max-w-7xl mx-auto min-h-[90vh] px-4 py-6 flex flex-col gap-10">
      <div className="w-full border border-dotted border-neutral-300 dark:border-neutral-700 rounded-xl p-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Button Component
        </h1>

        {/* Intro */}
        <p className="text-neutral-700 dark:text-neutral-300 text-base mb-4">
          The <code className="font-mono">Button</code> is a core interactive UI component. ToneRD provides beautiful, pre-styled button variants for seamless use in your projects. Use the dropdown below to view available variants and switch between preview or code mode.
        </p>

        {/* Note */}
        <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-3 rounded-md mb-6 text-sm">
          ⚠️ Make sure you have <strong>installed ToneRD</strong> before using the Button component.
        </div>

        {/* CLI Commands */}
        <div className="bg-neutral-100 dark:bg-neutral-800 p-5 rounded-md mb-8 space-y-4">
          <div>
            <p className="mb-2 text-neutral-800 dark:text-neutral-200 font-semibold text-base">
              Install ToneRD CLI:
            </p>
            <div className="flex items-center justify-between bg-neutral-900 text-green-300 px-4 py-2 rounded-md text-sm font-mono overflow-auto">
              <div className="flex items-center gap-2">
                <Terminal size={16} />
                npm install tonerd
              </div>
              <button onClick={() => handleCopy('npm install tonerd')}>
                {copied === 'npm install tonerd' ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-neutral-800 dark:text-neutral-200 font-semibold text-base">
              Add Button component:
            </p>
            <div className="flex items-center justify-between bg-neutral-900 text-green-300 px-4 py-2 rounded-md text-sm font-mono overflow-auto">
              <div className="flex items-center gap-2">
                <Terminal size={16} />
                npx tonerd add Button
              </div>
              <button onClick={() => handleCopy('npx tonerd add Button')}>
                {copied === 'npx tonerd add Button' ? (
                  <Check size={18} />
                ) : (
                  <Copy size={18} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Button Variants Section */}
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
          Button Variants
        </h2>

        {/* Dropdown + Tabs Header */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          {/* Left - Tabs */}
          <div className="flex space-x-4 border-b border-neutral-300 dark:border-neutral-700">
            <button
              className={`px-3 py-1 text-sm font-medium ${
                activeTab === 'preview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-neutral-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button
              className={`px-3 py-1 text-sm font-medium ${
                activeTab === 'code'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-neutral-500 hover:text-blue-600'
              }`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>

          {/* Right - Dropdown */}
          <div>
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
              className="text-sm bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded px-3 py-2 text-neutral-900 dark:text-neutral-100"
            >
              {variants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Preview / Code Box */}
        <div className="w-full max-w-[500px] h-72 mx-auto flex items-center justify-center rounded-md bg-neutral-900 px-4 relative">
          {activeTab === 'preview' ? (
            <Button variant={selectedVariant} className="h-12 text-base px-6">
              {selectedVariant}
            </Button>
          ) : (
            <div className="relative group w-full">
              <button
                onClick={() => handleCopy(codeString)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-neutral-400 hover:text-white"
                title="Copy code"
              >
                {copied === codeString ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} />
                )}
              </button>

              <pre className="text-sm text-neutral-100 overflow-x-auto leading-relaxed">
                <code>
                  <span className="bg-black inline-block px-1 rounded">
                    <span className="text-blue-400">import</span>{' '}
                    <span className="text-purple-400">{`{ Button }`}</span>{' '}
                    <span className="text-blue-400">from</span>{' '}
                    <span className="text-green-400">
                      '@/components/ui/Button'
                    </span>
                    ;
                  </span>
                  {'\n\n'}
                  <span className="text-orange-400">
                    export default function
                  </span>{' '}
                  <span className="text-yellow-400">Example</span>() {'{'}
                  {'\n  return (\n    '}
                  <span className="bg-black inline-block px-1 rounded">
                    <span className="text-purple-400">
                      {'<Button variant='}
                      <span className="text-green-400">
                        "{selectedVariant}"
                      </span>
                      {'>'}
                    </span>
                    <span className="text-neutral-300">{selectedVariant}</span>
                    <span className="text-purple-400">{'</Button>'}</span>
                  </span>
                  {'\n  );\n}'}
                </code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
