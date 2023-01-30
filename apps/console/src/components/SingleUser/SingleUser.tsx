import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

  console.log({ userId, user});

  return (
    <div className={styles.container}>
      <h2>Welcome to SingleUser!</h2>
      <div className={styles.user}>
        <div>
          <span>ID: </span>
          <span>{user?.id}</span>
        </div>
        <div>
          <span>First Name: </span>
          <span>{user?.first_name}</span>
        </div>
        <div>
          <span>Last Name: </span>
          <span>{user?.last_name}</span>
        </div>
        <div>
          <span>Email: </span>
          <span>{user?.email}</span>
        </div>
        <div>
          <span>Phone: </span>
          <span>{user?.phone}</span>
        </div>
        <div>
          <span>Description: </span>
          <span>{user?.desc}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;
