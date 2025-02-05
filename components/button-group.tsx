import type { NextPage } from "next";
import Button from "./button";
import styles from "./button-group.module.css";

export type ButtonGroupType = {
  className?: string;

  /** Variant props */
  items?: 2;
};

const ButtonGroup: NextPage<ButtonGroupType> = ({
  className = "",
  items = 1,
}) => {
  return (
    <div
      className={[styles.buttonGroup, className].join(" ")}
      data-items={items}
    >
      <Button
        danger={false}
        ghost={false}
        shape="standard"
        size="medium"
        state="normal"
        type="secondary"
        title="Logout"
        icon={false}
        wrapper="/wrapper@2x.png"
      />
      <Button
        danger={false}
        ghost={false}
        shape="standard"
        size="medium"
        state="normal"
        type="primary"
        title="Stay Logged in"
        icon={false}
        wrapper="/wrapper1@2x.png"
      />
    </div>
  );
};

export default ButtonGroup;
