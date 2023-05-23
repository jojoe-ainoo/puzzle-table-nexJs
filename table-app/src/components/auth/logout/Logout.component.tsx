import Button from "@/components/common/button/Button.component";
import styles from "./Logout.module.css";
import * as AuthTypes from "../types";

const LogoutComponent: React.FC<AuthTypes.LogoutComponentProps> = ({
  onLogout,
}) => {
  return (
    <div className={styles.logout}>
      <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default LogoutComponent;
