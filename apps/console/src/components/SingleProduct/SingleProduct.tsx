import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';

import { Product } from '../AllProducts/AllProducts';

export function SingleProduct() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetch(`products-api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <div className={styles.container}>
      <div className="card w-96 h-auto bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex w-full justify-between items-baseline mb-2">
            <h2 className="card-title">{product?.name}</h2>
            <p className="flex-grow-0">${product?.price}</p>
          </div>
          <p>{product?.description}</p>
          <div className="card-actions justify-between mt-3">
            <NavLink to="/products" className="btn btn-sm btn-secondary">
              Back
            </NavLink>
            {/* <button className="btn btn-sm btn-primary">Edit</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
