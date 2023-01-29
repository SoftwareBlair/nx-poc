import { Link } from 'react-router-dom';
import styles from './ConsoleLayout.module.scss';
interface UserConsoleLayoutProps {
  children: React.ReactNode;
}

function ConsoleLayout({ children }: UserConsoleLayoutProps) {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <h1>Nx POC Console</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default ConsoleLayout;
