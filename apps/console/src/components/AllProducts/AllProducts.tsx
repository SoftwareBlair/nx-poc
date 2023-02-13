import { useEffect,useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Table } from '@react-ui';

import styles from './AllProducts.module.scss';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

export function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [tableRows, setTableRows] = useState<string[][]>([]);

  useEffect(() => {
    fetch('products-api/products')
      .then((res) => res.json())
      .then((data) => {
        setTableHeaders(Object.keys(data[0]));
        setTableRows(
          data.map((product: Product) => [
            product.id,
            <NavLink to={`/products/${product.id}`} className="text-blue-600">{product.name}</NavLink>,
            `$${product.price}`,
            product.description,
          ])
        );
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
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
  );
}

export default AllProducts;
