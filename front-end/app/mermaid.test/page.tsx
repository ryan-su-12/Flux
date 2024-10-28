// pages/index.tsx

'use client'
import Mermaid from '@/components/MermaidChart';

export default function Home() {
  const chartDefinition = `
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
  `;

  return (
    <div>
      <h1>My Mermaid Diagram</h1>
      <Mermaid chart={chartDefinition} />
    </div>
  );
}

