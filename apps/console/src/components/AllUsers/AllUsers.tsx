import { useEffect, useReducer, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SvelteWrapper, Table } from '@react-ui';
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

interface ToastState {
  show: boolean;
  message: string;
}

export function AllUsers() {
  const SvelteButton = SvelteWrapper(Button);
  const [loading, setLoading] = useState(true);
  const [tableRows, setTableRows] = useState<string[][]>([]);
  const [toast, dispatchToast] = useReducer((state: ToastState, action: any) => {
    switch (action.type) {
      case 'show':
        return { ...state, show: true, message: action.message };
      case 'hide':
        return { ...state, show: false };
      default:
        return state;
    }
  }, { show: false, message: '' });
  const tableHeaders = ['ID', 'Name', 'Email', 'Phone', 'Description', ''];

  const deleteUser = (id: string) => {
    fetch(`user-api/users/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        dispatchToast({
          type: 'show',
          message: `User by ${data.first_name} ${data.last_name} has been successfully deleted`,
        });
        setTimeout(() => {
          dispatchToast({ type: 'hide' });
        }, 5000);
      })
      .catch((err) => console.log(err))
      .finally(() => {
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
                <SvelteButton
                  label="X"
                  style="btn btn-error btn-xs text-base-200"
                  onClick={() => deleteUser(user.id)}
                />,
              ])
            );
          })
      })
  };

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
            <SvelteButton
              label="X"
              style="btn btn-error btn-xs text-base-200"
              onClick={() => deleteUser(user.id)}
            />,
          ])
        );
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
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
      {toast.show && (
        <div className="toast toast-end mb-10">
          <div className="alert alert-success">
            <div>
              <span>{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllUsers;
