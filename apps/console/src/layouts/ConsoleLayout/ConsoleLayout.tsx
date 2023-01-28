import { Link } from 'react-router-dom';

interface UserConsoleLayoutProps {
  children: React.ReactNode;
}

function UserConsoleLayout({ children }: UserConsoleLayoutProps) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </>
  );
}

export default UserConsoleLayout;
