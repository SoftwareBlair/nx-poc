import styles from './TextArea.module.scss';

export interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea(props: TextAreaProps) {
  return (
    <div className="form-control">
      <label className="label" htmlFor={props.name}>{props.label}</label>
      <textarea
        className="textarea textarea-secondary w-full max-w-xs"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextArea;
