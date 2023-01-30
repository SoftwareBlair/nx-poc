import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './AllProducts.module.scss';

/* eslint-disable-next-line */
export interface AllProductsProps {}

export function AllProducts(props: AllProductsProps) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      description: 'Product 1 description',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      description: 'Product 2 description',
    },
  ]);

  return (
    <div className={styles.container}>
      <h2>Welcome to AllProducts!</h2>
      <table className={styles.table}>
        <thead>
          {Object.keys(products[0]).map((key) => (
            <th>{key}</th>
          ))}
        </thead>
        <tbody>
          {products.map((product) => (
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
