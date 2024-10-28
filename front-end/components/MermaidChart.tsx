// components/Mermaid.tsx


import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

const Mermaid = ({ chart }: MermaidProps) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mermaidRef.current) {
      try {
        mermaid.initialize({ startOnLoad: true });
        mermaid.contentLoaded(); // Render the Mermaid chart
      } catch (error) {
        console.error("Mermaid initialization error:", error);
      }
    }
  }, [chart]);

  return <div className="mermaid" ref={mermaidRef}>{chart}</div>;
};

export default Mermaid;
