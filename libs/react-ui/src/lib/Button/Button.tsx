import styles from './Button.module.scss';

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
