import styles from './LibOne.module.scss';

/* eslint-disable-next-line */
export interface LibOneProps {}

export function LibOne(props: LibOneProps) {
  return (
    <div className={styles['container']}>
      <h5>I'm a component from Lib One!</h5>
    </div>
  );
}

export default LibOne;
