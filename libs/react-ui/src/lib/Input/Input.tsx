import styles from './Input.module.scss';

export interface InputProps {
  name: string;
  label: string;
  value: string;
  type: 'text' | 'number';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input(props: InputProps) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={props.name}>{props.label}</label>
      <input
        className="input input-bordered input-secondary w-full max-w-xs"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

export default Input;
