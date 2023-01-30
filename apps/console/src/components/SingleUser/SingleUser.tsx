import { useParams } from 'react-router-dom';

import styles from './SingleUser.module.scss';

/* eslint-disable-next-line */
export interface SingleUserProps {}

export function SingleUser(props: SingleUserProps) {
  return (
    <div className={styles['container']}>
      <h2>Welcome to SingleUser!</h2>
    </div>
  );
}

export default SingleUser;
