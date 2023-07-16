"use client";

import { useRef, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { PiPaperPlaneRightLight } from "react-icons/pi";

import styles from "./styles.module.css";

export const Input = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.InputArea}
        style={
          isFocus ? {
            border: "2px solid rgb(41, 74, 185)"
          } : undefined
        }
      >
        <AiOutlinePlusCircle color="#fff" size={24} />
        <input
          type="text"
          placeholder="Envie uma mensagem ou digite “/” para exibir os comandos "
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
      <div className={styles.submit}>
        <PiPaperPlaneRightLight color="#fff" size={24} />
      </div>
    </div>
  );
};
