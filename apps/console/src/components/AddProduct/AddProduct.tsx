import { useReducer } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Input, SvelteWrapper, TextArea } from '@react-ui';
import { Button } from '@svelte-ui';

import styles from './AddProduct.module.scss';

interface State {
  name: string;
  price: string;
  description: string;
}

export function AddProduct() {
  const navigate = useNavigate();
  const SvelteButton = SvelteWrapper(Button);
  const initialState = {
    name: '',
    price: '',
    description: '',
  };
  const [state, dispatch] = useReducer((state: State, action: any) => {
    switch (action.type) {
      case 'NAME':
        return { ...state, name: action.payload };
      case 'PRICE':
        return { ...state, price: action.payload };
      case 'DESCRIPTION':
        return { ...state, description: action.payload };
      default:
        return state;
    }
  }, initialState);
  const buttonDisabled =
    state.name === '' ||
    state.price === '';

  const submitForm = async () => {
    await fetch('products-api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    navigate('/products');
  };

  return (
    <div className={styles.container}>
      <h2 className="text-xl font-bold">Add User</h2>
      <div className="w-full max-w-sm">
        <Input
          label="Name"
          name='name'
          type='text'
          value={state.name}
          onChange={(e) =>
            dispatch({ type: 'NAME', payload: e.target.value })
          }
        />
        <Input
          label="Price"
          name='price'
          type='text'
          value={state.price}
          onChange={(e) =>
            dispatch({ type: 'PRICE', payload: e.target.value })
          }
        />
        <TextArea
          label="Description"
          name='description'
          value={state.description}
          onChange={(e) => dispatch({ type: 'DESCRIPTION', payload: e.target.value })}
        />
        <div className={styles.buttonWrapper}>
          <div className="flex flex-1 align-middle justify-between mt-5 w-full">
            <NavLink to="/products" className="btn btn-warning btn-sm">
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

export default AddProduct;
