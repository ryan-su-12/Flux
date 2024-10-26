import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
  chart: string;
}

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    if (chartRef.current) {
      try {
        // Only using the 3 arguments as allowed by TypeScript
        mermaid.render(
          'graphDiv', 
          chart, 
          (svgCode: string | Element ) => {
            if (chartRef.current) {
              chartRef.current.innerHTML = svgCode;
            }
          }
        );
      } catch (e) {
        console.error("Mermaid diagram rendering error:", e);
      }
    }
  }, [chart]);

  return <div ref={chartRef} />;
};

export default MermaidChart;

