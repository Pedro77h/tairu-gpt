import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { PiPaperPlaneRightLight } from "react-icons/pi";

import styles from "./styles.module.css";

export const Input = () => {
  return (
    <div>
      <div className={styles.InputArea}>
        <AiOutlinePlusCircle />
        <input
          type="text"
          placeholder="Envie uma mensagem ou digite “/” para exibir os comandos "
        />
      </div>
      <div className={styles.submit}>
        <PiPaperPlaneRightLight />
      </div>
    </div>
  );
};
