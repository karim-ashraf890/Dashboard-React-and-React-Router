import styles from "./index.module.css";
import { Button as AntButton } from "antd";

type ButtonProps = {
  id?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export function Button({
  id,
  text,
  type = "button",
  className = "",
}: ButtonProps) {
  return (
    <AntButton
      id={id}
      htmlType={type} // مهم في antd بدل type
      className={`${styles.buttonGlobal} ${className}`}
    >
      {text}
    </AntButton>
  );
}
