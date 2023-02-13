import { NavLink } from 'react-router-dom';
import styles from './ConsoleLayout.module.scss';
interface UserConsoleLayoutProps {
  children: React.ReactNode;
}

function ConsoleLayout({ children }: UserConsoleLayoutProps) {
  return (
    <>
      <header className="">
        <nav className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <NavLink to="/" className="btn btn-md normal-case text-xl">Nx POC</NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to="/" className="btn btn-md normal-case">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products" className="btn btn-md normal-case">Products</NavLink>
              </li>
              <li>
                <NavLink to="/users" className="btn btn-md normal-case">Users</NavLink>
              </li>
            </ul>
          </div>
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
