import styles from './SingleProduct.module.scss';

/* eslint-disable-next-line */
export interface SingleProductProps {}

export function SingleProduct(props: SingleProductProps) {
  return (
    <div className={styles['container']}>
      <h2>Welcome to SingleProduct!</h2>
    </div>
  );
}

export default SingleProduct;
