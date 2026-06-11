import type { ChangeEvent } from "react";
import styles from "./index.module.css";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export function Input({
  id,
  type = "text",
  placeholder = "",
  className = "",
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${styles.inputGlobal} ${className} ${
          error ? styles.inputError : ""
        }`}
      />

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
