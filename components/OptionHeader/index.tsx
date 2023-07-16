import React from "react";
import { IconType } from "react-icons";

import styles from "./styles.module.css";

interface OptionHeaderProps {
  Icon: IconType;
  title: string;
}

export const index = async ({ Icon, title }: OptionHeaderProps) => {
  return (
    <header>
      <div className={styles.iconArea}>
        <Icon />
      </div>
      <h1>{title}</h1>
    </header>
  );
};
