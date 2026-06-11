import type { ChangeEvent } from "react";
import { Input as AntInput } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import styles from "./index.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const inputClass = `${styles.inputGlobal} ${className} ${
    error ? styles.inputError : ""
  }`;

  return (
    <div className={styles.inputWrapper}>
      {type === "password" ? (
        <AntInput.Password
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
          iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
        />
      ) : (
        <AntInput
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={inputClass}
        />
      )}

      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
