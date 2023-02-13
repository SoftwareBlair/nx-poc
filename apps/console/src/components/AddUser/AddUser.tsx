import styles from './AddUser.module.scss';

/* eslint-disable-next-line */
export interface AddUserProps {}

export function AddUser(props: AddUserProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AddUser!</h1>
    </div>
  );
}

export default AddUser;
