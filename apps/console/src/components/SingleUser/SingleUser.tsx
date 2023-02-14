import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import styles from './SingleUser.module.scss';

import { User } from '../AllUsers/AllUsers';

export function SingleUser() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetch(`user-api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div className={styles.container}>
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex w-full justify-between items-baseline mb-2">
            <h2 className="card-title">{user?.first_name} {user?.last_name}</h2>
            <p className="flex-grow-0">ID#: {user?.id}</p>
          </div>
          <p className="flex-grow-0">Email: {user?.email}</p>
          <p className="flex-grow-0">Phone: {user?.phone}</p>
          <p className="w-full">{user?.desc}</p>
          <div className="card-actions justify-between mt-3">
            <NavLink to="/users" className="btn btn-sm btn-secondary">
              Back
            </NavLink>
            {/* <button className="btn btn-sm btn-primary">Edit</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
