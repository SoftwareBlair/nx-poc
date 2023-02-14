import styles from './Welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles.container}>
      <h2 className="text-2xl font-bold">Welcome the to Nx POC Console!</h2>
      <h3 className="text-xl">Key Technologies used in this demo</h3>
      <ul className="list-disc">
        <li>
          <a href="https://nx.dev" target="_blank" className="link link-primary">Nx</a> - Monorepo for React, React Native, Node, and more.
        </li>
        <li>
          <a href="https://pnpm.io" target="_blank" className="link link-primary">PNPM</a> - Fast, disk space efficient package manager.
        </li>
        <li>
          <a href="https://vitejs.dev" target="_blank" className="link link-primary">Vite</a> - Next generation frontend tooling. It's fast!.
        </li>
        <li>
          <a href="https://reactjs.org" target="_blank" className="link link-primary">React</a> - A JavaScript library for building user interfaces.
        </li>
        <li>
          <a href="https://reactrouter.com" target="_blank" className="link link-primary">React Router</a> - Declarative routing for React.
        </li>
        <li>
          <a href="https://svelte.dev" target="_blank" className="link link-primary">Svelte</a> - Svelte is a radical new approach to building user interfaces.
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank" className="link link-primary">Sass</a> - CSS with superpowers.
        </li>
        <li>
          <a href="https://tailwindcss.com" target="_blank" className="link link-primary">Tailwind</a> - A utility-first CSS framework for rapidly building custom designs.
        </li>
        <li>
          <a href="https://daisyui.com" target="_blank" className="link link-primary">Daisy UI</a> - DaisyUI is a set of ready-to-use Tailwind CSS components.
        </li>
        <li>
          <a href="https://nodejs.org" target="_blank" className="link link-primary">Node</a> - JavaScript runtime built on Chrome's V8 JavaScript engine.
        </li>
        <li>
          <a href="https://expressjs.com" target="_blank" className="link link-primary">Express</a> - Fast, unopinionated, minimalist web framework for Node.js.
        </li>
        <li>
          <a href="https://golang.org" target="_blank" className="link link-primary">Go</a> - Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
        </li>
      </ul>
    </div>
  );
}

export default Welcome;
