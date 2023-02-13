import { useReducer } from 'react';
import styles from './AddUser.module.scss';

import { Input, SvelteWrapper, TextArea } from '@react-ui';
import { Button } from '@svelte-ui';

/* eslint-disable-next-line */
export interface AddUserProps {}
interface State {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  desc: string;
}

export function AddUser(props: AddUserProps) {
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

  const submitForm = async () => {
    const res = await fetch('user-api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className={styles['container']}>
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
    </div>
  );
}

export default AddUser;
