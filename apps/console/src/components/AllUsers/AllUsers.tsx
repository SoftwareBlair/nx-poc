import { useEffect, useReducer, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Table } from '@react-ui';

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
  const [loading, setLoading] = useState(true);
  const [tableRows, setTableRows] = useState<string[][]>([]);
  const tableHeaders = ['ID', 'Name', 'Email', 'Phone', 'Description'];

  useEffect(() => {
    fetch('user-api/users')
      .then((res) => res.json())
      .then((data) => {
        setTableRows(
          data.map((user: User) => [
            user.id,
            <NavLink to={`/users/${user.id}`} className="text-blue-600">{user.first_name} {user.last_name}</NavLink>,
            user.email,
            user.phone,
            user.desc,
          ])
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.usersTable}>
        <div className="flex flex-1 justify-between items-center w-full mb-2">
          <h3 className="text-xl font-bold">All Users</h3>
          <NavLink to="/users/add" className="btn btn-primary btn-sm">
            Add User
          </NavLink>
        </div>
        {loading ? (
          <div className="flex justify-center">
            Loading...
          </div>
        ) : (
          <Table headers={tableHeaders} rows={tableRows} />
        )}
      </div>
    </div>
  );
}

export default AllUsers;
