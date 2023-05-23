import Button from "@/components/common/button/Button.component";
import styles from "./Login.module.css";
import * as AuthTypes from "../types";

const LoginComponent: React.FC<AuthTypes.LoginComponentProps> = ({
  onLogin,
}) => {
  return (
    <div className={styles.login}>
      <Button onClick={onLogin}>Login</Button>
    </div>
  );
};

export default LoginComponent;
