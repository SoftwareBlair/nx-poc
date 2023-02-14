import { useEffect, useReducer, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { SvelteWrapper, Table } from '@react-ui';
import { Button } from '@svelte-ui';

import styles from './AllProducts.module.scss';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

interface ToastState {
  show: boolean;
  message: string;
}

export function AllProducts() {
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
  const tableHeaders = ['ID', 'Name', 'Price', 'Description', ''];

  const productMapper = (product: Product) => [
    product.id,
    <NavLink
      to={`/products/${product.id}`}
      className="text-secondary hover:text-accent"
    >
      {product.name}
    </NavLink>,
    `$${product.price}`,
    product.description,
    <SvelteButton
      label="X"
      style="btn btn-error btn-xs text-base-200"
      onClick={() => deleteProduct(product.id)}
    />,
  ];

  const deleteProduct = (id: string) => {
    fetch(`products-api/products/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        dispatchToast({ type: 'show', message: data.message });
        setTimeout(() => dispatchToast({ type: 'hide' }), 5000);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        fetch('products-api/products')
          .then((res) => res.json())
          .then((data) => data.map(productMapper))
          .then((data) => setTableRows(data))
      })
  };

  useEffect(() => {
    fetch('products-api/products')
      .then((res) => res.json())
      .then((data) => {
        setTableRows(data.map(productMapper));
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productTable}>
          <div className="flex flex-1 justify-between items-center w-full mb-2">
            <h3 className="text-xl font-bold">All Products</h3>
            <NavLink to="/products/add" className="btn btn-primary btn-sm">
              Add Product
            </NavLink>
          </div>
          {loading ? (
            <div className="flex justify-center">
              Loading...
            </div>
          ) : (
            <Table
              headers={tableHeaders}
              rows={tableRows}
            />
          )}
        </div>
      </div>
      {toast.show && (
        <div className="toast toast-end mb-10">
          <div className="alert alert-warning">
            <div>
              <span>{toast.message}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllProducts;
