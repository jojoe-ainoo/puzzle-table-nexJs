import React from "react";
import Button from "@/components/common/button/Button.component";
import styles from "./TableHeader.module.css";

interface TableHeaderComponentProps {
  loggedIn: boolean;
  onSave: () => void;
  onLoad: () => void;
  onLogout: () => void;
}

const TableHeaderComponent: React.FC<TableHeaderComponentProps> = ({
  loggedIn,
  onSave,
  onLoad,
  onLogout,
}) => {
  return (
    <div className={styles.tableHeader}>
      <h2>Table Header Component</h2>
      {loggedIn ? (
        <>
          <Button onClick={onSave}>Save</Button>
          <Button onClick={onLoad}>Load</Button>
          <Button onClick={onLogout}>Logout</Button>
        </>
      ) : (
        <Button onClick={onLoad}>Login</Button>
      )}
    </div>
  );
};

export default TableHeaderComponent;
