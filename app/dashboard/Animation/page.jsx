'use client';

import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Copy, Check } from 'lucide-react';

const animationVariants = [
  { label: 'None', value: 'none' },
  { label: 'Elevation', value: 'elevation' },
  { label: 'Scale Pop', value: 'scale' },
  { label: 'Bounce', value: 'bounce' },
  { label: 'Color Change', value: 'colorChange' },
  { label: 'Click Scale', value: 'clickShrink' },
  { label: 'Border Flash', value: 'borderFlash' },
];

const buttonVariants = ['default', 'secondary', 'destructive', 'outline', 'link'];

export default function AnimationPage() {
  const [selectedAnimation, setSelectedAnimation] = useState('hoverGlow');
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { Button } from '@/components/ui/Button';

export default function Example() {
  return (
    <Button animation="${selectedAnimation}">
      ${selectedAnimation}
    </Button>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto min-h-[90vh] px-4 py-6 flex flex-col gap-10">
      <div className="w-full border border-dotted border-neutral-300 dark:border-neutral-700 rounded-xl p-6">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Button Animation Showcase
        </h1>

        {/* Intro */}
        <p className="text-neutral-700 dark:text-neutral-300 text-base mb-4">
          Explore a variety of animation effects available for the <code className="font-mono">Button</code> component in ToneRD.
          You can preview animation-only styles, combine them with button variants, and also see how they behave across sizes.
        </p>

        {/* Guide */}
        <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-4 py-3 rounded-md mb-6 text-sm">
          💡 Tip: Use the <strong>animation</strong> prop like <code className="font-mono">animation="scale"</code> to apply effects.
        </div>

        {/* === Animation Only Preview === */}
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Animation Variants</h2>

        {/* Dropdown + Tabs */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4 border-b border-neutral-300 dark:border-neutral-700">
            {['preview', 'code'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-sm font-medium ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-neutral-500 hover:text-blue-600'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 capitalize">
            {selectedAnimation}
          </div>
        </div>

        {/* Animation Dropdown */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Select Animation Variant:
          </label>
          <select
            value={selectedAnimation}
            onChange={(e) => setSelectedAnimation(e.target.value)}
            className="text-sm bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-600 rounded px-3 py-2 text-neutral-900 dark:text-neutral-100"
          >
            {animationVariants.map((anim) => (
              <option key={anim.value} value={anim.value}>
                {anim.label}
              </option>
            ))}
          </select>
        </div>

        {/* Animation Tab Box */}
        <div className="w-full max-w-[500px] h-72 mx-auto flex items-center justify-center rounded-md bg-neutral-900 px-4 relative">
          {activeTab === 'preview' ? (
            <Button animation={selectedAnimation} className="px-6 py-3 text-base">
              {selectedAnimation}
            </Button>
          ) : (
            <div className="relative group w-full">
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition text-neutral-400 hover:text-white"
                title="Copy code"
              >
                {copied ? (
                  <Check size={18} className="text-green-400" />
                ) : (
                  <Copy size={18} />
                )}
              </button>

              <pre className="text-sm text-neutral-100 overflow-x-auto leading-relaxed whitespace-pre-wrap">
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
                  <span className="text-orange-400">export default function</span>{' '}
                  <span className="text-yellow-400">Example</span>() {'{'}
                  {'\n  return (\n    '}
                  <span className="bg-black inline-block px-1 rounded">
                    <span className="text-purple-400">
                      {'<Button animation='}
                      <span className="text-green-400">
                        "{selectedAnimation}"
                      </span>
                      {'>'}
                    </span>
                    <span className="text-neutral-300">{selectedAnimation}</span>
                    <span className="text-purple-400">{'</Button>'}</span>
                  </span>
                  {'\n  );\n}'}
                </code>
              </pre>
            </div>
          )}
        </div>

        {/* === Button Variants Preview === */}
        <h2 className="text-xl font-semibold mt-10 text-neutral-900 dark:text-neutral-100 mb-4">
          Button Variants + Animation
        </h2>
        <div className="flex flex-wrap gap-4">
          {buttonVariants.map((variant) => (
            <Button
              key={variant}
              variant={variant}
              animation={selectedAnimation}
              className="px-5 py-2 text-sm"
            >
              {variant}
            </Button>
          ))}
        </div>

       
      </div>
    </div>
  );
}
