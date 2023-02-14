import { useReducer } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, SvelteWrapper, TextArea } from '@react-ui';
import { Button } from '@svelte-ui';

import styles from './AddUser.module.scss';

interface State {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  desc: string;
}

export function AddUser() {
  const navigate = useNavigate();
  const SvelteButton = SvelteWrapper(Button);
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
  const buttonDisabled =
    state.first_name === '' ||
    state.last_name === '' ||
    state.email === '' ||
    state.phone === '';

  const submitForm = async () => {
    const res = await fetch('user-api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    navigate('/users');
  };

  return (
    <div className={styles.container}>
      <h2 className="text-xl font-bold">Add User</h2>
      <div className="w-full max-w-sm">
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
          <div className="flex flex-1 align-middle justify-between mt-5 w-full">
            <NavLink to="/users" className="btn btn-warning btn-sm">
              Cancel
            </NavLink>
            <div
              className="tooltip tooltip-info tooltip-bottom"
              data-tip="I'm a button built with Svelte"
            >
              <SvelteButton
                label="Submit"
                onClick={submitForm}
                style="btn btn-primary btn-sm"
                disabled={buttonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
