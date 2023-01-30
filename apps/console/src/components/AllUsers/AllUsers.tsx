import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './AllUsers.module.scss';

export function AllUsers() {
  const [users, setUsers] = useState([
    {
      id: 1,
      First_Name: 'John',
      Last_Name: 'Doe',
      Email: 'john@doe.com',
      Phone: '555-555-5555',
      Address: '123 Main St.',
      City: 'Denver',
      State: 'CO',
      Zip: '80202',
      Country: 'USA',
    },
    {
      id: 2,
      First_Name: 'Jane',
      Last_Name: 'Doe',
      Email: 'jane@doe.com',
      Phone: '444-444-4444',
      Address: '321 Main St.',
      City: 'Denver',
      State: 'CO',
      Zip: '80202',
      Country: 'USA',
    }
  ]);

  return (
    <div className={styles.container}>
      <h2>All Users</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {Object.keys(users[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <Link to={`/users/${user.id}`}>{user.First_Name}</Link>
              </td>
              <td>{user.Last_Name}</td>
              <td>{user.Email}</td>
              <td>{user.Phone}</td>
              <td>{user.Address}</td>
              <td>{user.City}</td>
              <td>{user.State}</td>
              <td>{user.Zip}</td>
              <td>{user.Country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllUsers;
