import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to={`/products/${product.id}`}>{product.name}</Link>,
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
      <h2 className="text-lg mb-5">All Products</h2>
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
  );
}

export default AllProducts;
