import React from "react";
import { FiArrowRight } from "react-icons/fi";

import styles from "./styles.module.css";
import { IconType } from "react-icons";
import {
  OptionType,
  choiceOption,
} from "@src/lib/store/reducers/option.reducer";
import { useAppDispatch } from "@src/lib/store/hooks";

interface OptionProps {
  Icon: IconType;
  text: string;
  action: OptionType;
}

export const Option = ({ Icon, text, action }: OptionProps) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.container}
      onClick={() => dispatch(choiceOption(action))}
    >
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
