import type { NextPage } from "next";
import Image from "next/image";
import styles from "./button.module.css";

export type ButtonType = {
  className?: string;
  title?: string;
  icon?: boolean;
  wrapper: string;

  /** Variant props */
  danger?: boolean;
  ghost?: boolean;
  shape?: string;
  size?: string;
  state?: string;
  type?: "secondary" | "primary";
};

const Button: NextPage<ButtonType> = ({
  className = "",
  danger = false,
  ghost = true,
  shape = "standard",
  size = "small",
  state = "disabled",
  type = "secondary",
  title = "Logout",
  icon = false,
  wrapper,
}) => {
  return (
    <div
      className={[styles.root, className].join(" ")}
      data-danger={danger}
      data-ghost={ghost}
      data-shape={shape}
      data-size={size}
      data-state={state}
      data-type={type}
    >
      {icon && (
        <div className={styles.iconWrapper}>
          <Image
            className={styles.wrapperIcon}
            width={14}
            height={14}
            alt=""
            src={wrapper}
          />
        </div>
      )}
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export default Button;
