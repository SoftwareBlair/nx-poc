import { NavLink } from 'react-router-dom';
import styles from './ConsoleLayout.module.scss';
interface UserConsoleLayoutProps {
  children: React.ReactNode;
}

function ConsoleLayout({ children }: UserConsoleLayoutProps) {
  return (
    <>
      <header>
        <nav className="navbar bg-neutral text-neutral-content">
          <div className="flex-1">
            <NavLink to="/" className="btn btn-md normal-case text-lg">Nx POC</NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal justify-between px-1 w-72 mr-2">
              <li>
                <NavLink to="/" className="btn btn-md normal-case hover:text-base-200">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products" className="btn btn-md normal-case hover:text-base-200">Products</NavLink>
              </li>
              <li>
                <NavLink to="/users" className="btn btn-md normal-case hover:text-base-200">Users</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <p>Nx Demo for Innovation Day Feb, 2023</p>
      </footer>
    </>
  );
}

export default ConsoleLayout;
