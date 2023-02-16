import { useEffect, useReducer, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import { Input, SvelteWrapper, TextArea } from '@react-ui';
import { Button } from '@svelte-ui';

import styles from './SingleProduct.module.scss';

interface State {
  name: string;
  price: string;
  description: string;
}

export function SingleProduct() {
  const SvelteButton = SvelteWrapper(Button);
  const { productId } = useParams<{ productId: string }>();
  const [isEditing, setIsEditing] = useState(false);
  const initialState = {
    id: productId,
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

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`products-api/products/${productId}`);
      const product = await response.json();
      dispatch({ type: 'NAME', payload: product.name });
      dispatch({ type: 'PRICE', payload: product.price });
      dispatch({ type: 'DESCRIPTION', payload: product.description });
    };
    fetchProduct();
  }, [productId]);

  const updateProduct = async () => {
    await fetch(`products-api/products/${productId}`, {
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
              <h2 className="card-title">{state?.name}</h2>
              <p className="flex-grow-0">${state?.price}</p>
            </div>
            <p>{state?.description}</p>
            <div className="card-actions justify-between mt-3">
              <NavLink to="/products" className="btn btn-sm btn-secondary">
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
                label="Name"
                name="name"
                type="text"
                value={state?.name}
                onChange={(e) =>
                  dispatch({ type: 'NAME', payload: e.target.value })
                }
              />
              <Input
                label="Price"
                name="price"
                type="number"
                value={state?.price}
                onChange={(e) =>
                  dispatch({ type: 'PRICE', payload: e.target.value })
                }
              />
              <TextArea
                label="Description"
                name="description"
                value={state?.description}
                onChange={(e) =>
                  dispatch({ type: 'DESCRIPTION', payload: e.target.value })
                }
              />
            </div>
            <div className="card-actions justify-between mt-3">
              <div
                className="tooltip tooltip-info tooltip-bottom"
                data-tip="I'm a button built with Svelte"
              >
                <SvelteButton
                  label="Cancel"
                  onClick={() => setIsEditing(false)}
                  style="btn btn-sm btn-warning"
                />
              </div>
              <div
                className="tooltip tooltip-info tooltip-bottom"
                data-tip="I'm a button built with Svelte"
              >
                <SvelteButton
                  label="Save"
                  onClick={updateProduct}
                  style="btn btn-sm btn-primary"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
