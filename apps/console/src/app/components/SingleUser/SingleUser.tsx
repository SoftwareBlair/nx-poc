import styles from './SingleUser.module.scss';

/* eslint-disable-next-line */
export interface SingleUserProps {}

export function SingleUser(props: SingleUserProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SingleUser!</h1>
    </div>
  );
}

export default SingleUser;
