import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './AllProducts.module.scss';

/* eslint-disable-next-line */
export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
}

export function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    fetch('api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <h2>All Products</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          )}
          {products?.map((product: Products) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </td>
              <td>{product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllProducts;
