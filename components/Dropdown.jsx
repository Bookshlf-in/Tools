import styles from '@/styles/Dropdown.module.css';

const Dropdown = ({ name, values, onChange }) => {
  return (
    <div className={styles.dropdownContainer}>
      <select name={name} className={styles.select} onChange={onChange}>
        {values.map((e) => (
          <option key={e.id} value={e.id}>
            {e[name]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
