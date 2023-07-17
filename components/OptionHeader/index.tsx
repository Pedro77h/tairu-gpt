import React from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.css";

interface OptionHeaderProps {
  Icon: IconType;
  title: string;
}

export const OptionHeader =  ({ Icon, title }: OptionHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.iconArea}>
        <Icon size={24} />
      </div>
      <h1>{title}</h1>
    </div>
  );
};
