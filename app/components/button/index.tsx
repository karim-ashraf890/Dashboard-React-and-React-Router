import styles from "./index.module.css";

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
    <button
      id={id}
      type={type}
      className={`${styles.buttonGlobal} ${className}`}
    >
      {text}
    </button>
  );
}
