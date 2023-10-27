import styles from './TextInput.module.css';
type Props = {
  placeholder: string;
  type?: string;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  value: string;
};

const TextInput = ({ placeholder, type, onInput, value }: Props) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onInput={onInput}
      value={value}
      style={{ borderRadius: 5, height: 20 }}
    />
  );
};

export default TextInput;
