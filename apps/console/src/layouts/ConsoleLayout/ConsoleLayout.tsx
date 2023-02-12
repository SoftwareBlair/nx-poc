import { Link, NavLink } from 'react-router-dom';
import styles from './ConsoleLayout.module.scss';
interface UserConsoleLayoutProps {
  children: React.ReactNode;
}

function ConsoleLayout({ children }: UserConsoleLayoutProps) {
  return (
    <>
      <header className="navbar bg-neutral text-neutral-content">
        <nav className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Products
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                  </svg>
                </a>
                <ul className="p-2 bg-info-content">
                  <li>
                    <Link to="/products">All Products</Link>
                  </li>
                  <li>
                    <Link to="/products/add">Add Product</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">Nx POC</NavLink>
        </nav>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <a>
                Products
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-info-content">
                <li>
                  <Link to="/products">All Products</Link>
                </li>
                <li>
                  <Link to="/products/add">Add Product</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
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
