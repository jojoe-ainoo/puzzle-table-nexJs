import styles from "./Button.module.css";
import * as CommonTypes from "../types";

const Button: React.FC<CommonTypes.ButtonProps> = ({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
