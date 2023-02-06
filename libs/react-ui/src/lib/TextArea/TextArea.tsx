import styles from './TextArea.module.scss';

export interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea(props: TextAreaProps) {
  return (
    <div className={styles.textAreaContainer}>
      <label className={styles.label} htmlFor={props.name}>{props.label}</label>
      <textarea
        className={styles.textArea}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextArea;
