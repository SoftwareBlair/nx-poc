import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './AllUsers.module.scss';

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  desc: string;
}

export function AllUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('user-api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className={styles.container}>
      <h2>All Users</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <Link to={`/users/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
