'use client';

import { Terminal } from 'lucide-react';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const steps = [
  {
    title: 'Install ToneRD',
    command: 'npm install tonerd',
    description: 'Add ToneRD to your project as a development dependency using npm.',
  },
  {
    title: 'Use the CLI to Add Components',
    command: 'npx tonerd add Button',
    description: 'Scaffold UI components instantly. Replace `Button` with any supported component name.',
  },
];

export default function InstallationPage() {
  const [copiedCommand, setCopiedCommand] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
        Get Started with <span className="text-blue-600">Tone</span>
        <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">RD</span>
      </h1>

      {/* Intro */}
      <p className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">
        ToneRD is a UI component CLI tool that helps you add **beautiful, animated, pre-styled components**
        into your React or Next.js projects — instantly.
      </p>

      {/* What It Offers */}
      <div className="bg-neutral-100 dark:bg-neutral-800 rounded-xl p-6 mb-8 shadow-md">
        <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">What it offers:</h2>
        <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
          <li>1-line installation using <code className="font-mono">npx</code></li>
          <li>Pre-built animation and effect components</li>
          <li>Dark mode and Tailwind-friendly classes</li>
          <li>Smart checks for project type and dependency</li>
          <li>Built-in support for <code>clsx</code> class merging</li>
        </ul>
      </div>

      {/* Installation Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={step.command} className="bg-neutral-900 rounded-lg p-5 text-neutral-100 relative">
            <h3 className="font-semibold text-lg mb-1">{index + 1}. {step.title}</h3>
            <p className="mb-3 text-sm text-neutral-300">{step.description}</p>
            <div className="flex items-center justify-between bg-neutral-800 px-4 py-2 rounded-md font-mono text-sm text-green-400">
              <div className="flex items-center gap-2">
                <Terminal size={16} />
                <span className="text-green-300">{step.command}</span>
              </div>
              <button
                onClick={() => handleCopy(step.command)}
                className="text-neutral-300 hover:text-white transition"
                aria-label="Copy command"
              >
                {copiedCommand === step.command ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CLI Help Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2">CLI Help</h2>
        <pre className="bg-neutral-900 text-neutral-200 p-4 rounded-md text-sm overflow-auto">
{`Usage:
  npx tonerd add <ComponentName>

Example:
  npx tonerd add Button`}
        </pre>
        <p className="text-sm text-neutral-500 mt-2">
          Your components will be generated inside <code className="font-mono">components/ui/</code>
        </p>
      </div>
    </div>
  );
}
