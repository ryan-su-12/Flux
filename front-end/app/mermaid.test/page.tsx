import { NextPage } from 'next';
import MermaidChart from '../components/MermaidChart';

const Home: NextPage = () => {
  const chartDefinition = `
    graph TD;
      A-->B;
      A-->C;
      B-->D;
      C-->D;
  `;

  return (
    <div>
      <h1>Mermaid.js with Next.js (TypeScript)</h1>
      <MermaidChart chart={chartDefinition} />
    </div>
  );
};

export default Home;
