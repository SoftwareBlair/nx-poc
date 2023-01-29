import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.First_Name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllUsers;
