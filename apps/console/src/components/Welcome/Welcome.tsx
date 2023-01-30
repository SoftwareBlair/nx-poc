import styles from './Welcome.module.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  return (
    <div className={styles['container']}>
      <h2>Welcome to Nx POC Dashboard!</h2>
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
      </ul>
    </div>
  );
}

export default Welcome;
