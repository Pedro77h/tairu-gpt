"use client";

import { useEffect, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { PiPaperPlaneRightLight } from "react-icons/pi";

import styles from "./styles.module.css";
import { Api, sendMessage } from "@src/lib/api";

export const Input = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>();

  const getData = async () => {
    const { data } = await sendMessage(
      "Me diga em que dia da semana cai o dia 19 de fevereiro de 2023"
    );

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.InputArea}
        style={
          isFocus
            ? {
                border: "2px solid rgb(41, 74, 185)",
              }
            : undefined
        }
      >
        <label htmlFor="image-upload">
          <AiOutlinePlusCircle
            color="#fff"
            size={24}
            style={{ cursor: "pointer" }}
          />
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => setImage(e.target.files?.[0])}
        />

        <input
          type="text"
          placeholder={
            image
              ? "Descreva como a imagem deve ser editada"
              : "Envie uma mensagem ou clique acima para selecionar o que deseja"
          }
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onSubmit={getData}
        />
      </div>
      <div className={styles.submit} onClick={() => getData()}>
        <PiPaperPlaneRightLight color="#fff" size={24} />
      </div>
    </div>
  );
};
