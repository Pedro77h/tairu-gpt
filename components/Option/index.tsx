import React from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./styles.module.css";
import { IconType } from "react-icons";

interface OptionProps {
  Icon: IconType;
  text: string;
  action?: () => any
}

export const Option = ({ Icon, text }: OptionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconArea}>
          <Icon color="#94A3B8" size={20} />
        </div>
        <p>{text}</p>
      </div>
      <FiArrowRight size={20} />
    </div>
  );
};
