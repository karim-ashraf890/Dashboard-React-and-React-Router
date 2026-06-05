import styles from "./index.module.css";
import { AiFillBulb } from "react-icons/ai";
export default function SignIn() {
  return (
    <>
      <div className={styles["container-fluid"]}>
        <AiFillBulb size={40} color="gold" />
      </div>
    </>
  );
}
