import styles from './TextInput.module.css';

function TextInput({ label, icon, placeholder, type = 'text', hint }) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputWrapper}>
        {icon && (
          <span className={styles.icon}>
            <i className={icon}></i>
          </span>
        )}
        <input
          className={styles.input}
          type={type}
          placeholder={placeholder}
        />
      </div>
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}

export default TextInput;
