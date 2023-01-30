import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './SingleProduct.module.scss';


export function SingleProduct() {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`products-api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [productId]);

  return (
    <div className={styles.container}>
      <h2>Welcome to SingleProduct!</h2>
      <div className={styles.product}>
        <h3>{product?.name}</h3>
        <p>{product?.price}</p>
        <p>{product?.description}</p>
      </div>
    </div>
  );
}

export default SingleProduct;
