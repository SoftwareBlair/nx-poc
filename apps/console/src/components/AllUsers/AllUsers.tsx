import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button, Input, TextArea } from '@react-ui';

import styles from './AllUsers.module.scss';

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  desc: string;
}

interface State {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  desc: string;
}

export function AllUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    desc: '',
  };
  const [state, dispatch] = useReducer((state: State, action: any) => {
    switch (action.type) {
      case 'FIRST_NAME':
        return { ...state, first_name: action.payload };
      case 'LAST_NAME':
        return { ...state, last_name: action.payload };
      case 'EMAIL':
        return { ...state, email: action.payload };
      case 'PHONE':
        return { ...state, phone: action.payload };
      case 'DESC':
        return { ...state, desc: action.payload };
      default:
        return state;
    }
  }, initialState);

  const submitForm = () => {
    fetch('user-api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers([...users, data]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch('user-api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <h2>Add User</h2>
      <div className={styles.form}>
        <Input
          label="First Name"
          name='first_name'
          type='text'
          value={state.first_name}
          onChange={(e) =>
            dispatch({ type: 'FIRST_NAME', payload: e.target.value })
          }
        />
        <Input
          label="Last Name"
          name='last_name'
          type='text'
          value={state.last_name}
          onChange={(e) =>
            dispatch({ type: 'LAST_NAME', payload: e.target.value })
          }
        />
        <Input
          label="Email"
          name='email'
          type='text'
          value={state.email}
          onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
        />
        <Input
          label="Phone"
          name='phone'
          type='text'
          value={state.phone}
          onChange={(e) => dispatch({ type: 'PHONE', payload: e.target.value })}
        />
        <TextArea
          label="Description"
          name='desc'
          value={state.desc}
          onChange={(e) => dispatch({ type: 'DESC', payload: e.target.value })}
        />
        <div className={styles.buttonWrapper}>
          <Button text="Submit" onClick={submitForm} />
        </div>
      </div>
      <div className={styles.usersTable}>
        <h3>All Users</h3>
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
    </div>
  );
}

export default AllUsers;
