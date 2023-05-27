import styles from '@/styles/TextInput.module.css';

const TextInput = ({
  name,
  placeholder,
  type,
  value,
  onChange,
  onPressEnter,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onPressEnter();
    }
  };
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      className={styles.textInput}
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TextInput;
