import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

import { Input, SvelteWrapper, Table, TextArea } from '@react-ui';
import { Button } from '@svelte-ui';

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
  const SvelteButton = SvelteWrapper(Button);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [tableRows, setTableRows] = useState<string[][]>([]);
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
        setTableRows((prev) => [
          ...prev,
          [
            data.id,
            <Link to={`/users/${data.id}`}>{data.first_name}</Link>,
            data.last_name,
            data.email,
            data.phone,
            data.desc,
          ],
        ]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        dispatch({ type: 'FIRST_NAME', payload: '' });
        dispatch({ type: 'LAST_NAME', payload: '' });
        dispatch({ type: 'EMAIL', payload: '' });
        dispatch({ type: 'PHONE', payload: '' });
        dispatch({ type: 'DESC', payload: '' });
      }
    )
  };

  useEffect(() => {
    fetch('user-api/users')
      .then((res) => res.json())
      .then((data) => {
        setTableHeaders(Object.keys(data[0]));
        setTableRows(
          data.map((user: User) => [
            user.id,
            <Link to={`/users/${user.id}`}>{user.first_name}</Link>,
            user.last_name,
            user.email,
            user.phone,
            user.desc,
          ])
        );
      })
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
          <SvelteButton label="Submit" onClick={submitForm} />
        </div>
      </div>
      <div className={styles.usersTable}>
        <h3>All Users</h3>
        <Table headers={tableHeaders} rows={tableRows} />
      </div>
    </div>
  );
}

export default AllUsers;
