import styles from './Welcome.module.scss';

export function Welcome() {
  return (
    <div className={styles['container']}>
      <h2>Welcome the to Nx POC Dashboard!</h2>
      <p>
        This is a POC for a dashboard application built with Nx.
      </p>
      <h3>Technologies used in this demo</h3>
      <ul>
        <li>
          <a href="https://nx.dev" target="_blank">Nx</a> - Monorepo for React, React Native, Node, and more.
        </li>
        <li>
          <a href="https://reactjs.org" target="_blank">React</a> - A JavaScript library for building user interfaces.
        </li>
        <li>
          <a href="https://reactrouter.com" target="_blank">React Router</a> - Declarative routing for React.
        </li>
        <li>
          <a href="https://sass-lang.com" target="_blank">Sass</a> - CSS with superpowers.
        </li>
        <li>
          <a href="https://nodejs.org" target="_blank">Node</a> - JavaScript runtime built on Chrome's V8 JavaScript engine.
        </li>
        <li>
          <a href="https://expressjs.com" target="_blank">Express</a> - Fast, unopinionated, minimalist web framework for Node.js.
        </li>
        <li>
          <a href="https://golang.org" target="_blank">Go</a> - Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.
        </li>
      </ul>
    </div>
  );
}

export default Welcome;
