import type { NextPage } from "next";
import Image from "next/image";
import ButtonGroup from "./button-group";
import styles from "./modal-info.module.css";

export type ModalInfoType = {
  className?: string;
};

const ModalInfo: NextPage<ModalInfoType> = ({ className = "" }) => {
  return (
    <div className={[styles.modalinfo, className].join(" ")}>
      <div className={styles.content}>
        <Image
          className={styles.exclamationcircleIcon}
          loading="lazy"
          width={22}
          height={22}
          alt=""
          src="/exclamationcircle.svg"
        />
        <div className={styles.right}>
          <div className={styles.title}>Your session has expired</div>
          <div className={styles.content1}>
            Due to inactivity, your session has expired. Please choose to
            continue logging in or log out.
          </div>
        </div>
      </div>
      <ButtonGroup items={2} />
    </div>
  );
};

export default ModalInfo;
