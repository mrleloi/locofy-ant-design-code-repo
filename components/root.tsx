import type { NextPage } from "next";
import ModalInfo from "./modal-info";
import styles from "./root.module.css";

export type RootType = {
  className?: string;
};

const Root: NextPage<RootType> = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.modalmask} />
      <ModalInfo />
    </div>
  );
};

export default Root;
