import { useEffect, useReducer, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { Input, SvelteWrapper, TextArea } from '@react-ui';
import { Button } from '@svelte-ui';

import styles from './SingleUser.module.scss';

interface State {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  desc: string;
}

export function SingleUser() {
  const SvelteButton = SvelteWrapper(Button);
  const { userId } = useParams<{ userId: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const initialState = {
    id: userId,
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

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`user-api/users/${userId}`);
      const user = await res.json();
      dispatch({ type: 'FIRST_NAME', payload: user.first_name });
      dispatch({ type: 'LAST_NAME', payload: user.last_name });
      dispatch({ type: 'EMAIL', payload: user.email });
      dispatch({ type: 'PHONE', payload: user.phone });
      dispatch({ type: 'DESC', payload: user.desc });
    }
    fetchUser();
  }, [userId]);

  const updateProduct = async () => {
    const res = await fetch(`user-api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      {!isEditing ? (
        <div className="card w-96 h-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex w-full justify-between items-baseline mb-2">
              <h2 className="card-title">{state?.first_name} {state?.last_name}</h2>
              <p className="flex-grow-0">ID#: {userId}</p>
            </div>
            <p className="flex-grow-0">Email: {state?.email}</p>
            <p className="flex-grow-0">Phone: {state?.phone}</p>
            <p className="w-full">{state?.desc}</p>
            <div className="card-actions justify-between mt-3">
              <NavLink to="/users" className="btn btn-sm btn-secondary">
                Back
              </NavLink>
              <button onClick={() => setIsEditing(true)} className="btn btn-sm btn-primary">Edit</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card w-96 h-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex flex-col w-full">
              <Input
                label="First Name"
                name="first_name"
                type="text"
                value={state.first_name}
                onChange={(e) => dispatch({ type: 'FIRST_NAME', payload: e.target.value })}
              />
              <Input
                label="Last Name"
                name="last_name"
                type="text"
                value={state.last_name}
                onChange={(e) => dispatch({ type: 'LAST_NAME', payload: e.target.value })}
              />
              <Input
                label="Email"
                name="email"
                type="text"
                value={state.email}
                onChange={(e) => dispatch({ type: 'EMAIL', payload: e.target.value })}
              />
              <Input
                label="Phone"
                name="phone"
                type="text"
                value={state.phone}
                onChange={(e) => dispatch({ type: 'PHONE', payload: e.target.value })}
              />
              <TextArea
                label="Description"
                name="desc"
                value={state.desc}
                onChange={(e) => dispatch({ type: 'DESC', payload: e.target.value })}
              />
            </div>
            <div className="card-actions justify-between mt-3">
              <SvelteButton
                label="Cancel"
                onClick={() => setIsEditing(false)}
                style="btn btn-sm btn-warning"
              />
              <SvelteButton
                label="Save"
                onClick={updateProduct}
                style="btn btn-sm btn-primary"
              />
            </div>
          </div>
        </div>
      )
    }
    </div>
  );
}

export default SingleUser;
