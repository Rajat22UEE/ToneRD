'use client';

import { Terminal, Check, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';

const steps = [
  {
    id: 'install-tonerd',
    title: 'Install ToneRD',
    command: 'npm install tonerd',
    description: 'Add ToneRD to your project as a development dependency using npm.',
  },
  {
    id: 'add-component',
    title: 'Use the CLI to Add Components',
    command: 'npx tonerd add <Elements>',
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

  // Scroll spy logic (optional enhancement later)

  return (
    <div className="max-w-7xl mx-auto min-h-[90vh] px-4 py-6 flex flex-col lg:flex-row gap-10">
      {/* Main Content */}
      <div className="flex-1 border border-dotted border-neutral-300 dark:border-neutral-700 rounded-xl p-6">
        {/* Heading */}
        <h1 id="heading" className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
          Get Started with{' '}
          <span className="text-blue-600">Tone</span>
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 text-transparent bg-clip-text">
            RD
          </span>
        </h1>

        {/* Intro */}
        <p id="intro" className="text-neutral-700 dark:text-neutral-300 text-lg mb-6">
          ToneRD is a UI component CLI tool that helps you add <strong>beautiful, animated, pre-styled components</strong>{' '}
          into your React or Next.js projects — instantly.
        </p>

       

        {/* Installation Steps */}
        <div id="installation" className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.command} id={step.id} className="bg-neutral-900 rounded-lg p-5 text-neutral-100 relative">
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
          <p className="text-sm text-neutral-500 mt-8">
            Your components will be generated inside <code className="font-mono">components/ui/</code>
          </p>
        
      </div>
      
    </div>
  );
}
