"use client";
import { Option } from "../Option";
import { BsCodeSlash, BsImage } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";

import styles from "./styles.module.css";
import { Providers } from "@src/lib/providers";

export function Options() {
  return (
    <Providers>
      <div className={styles.options}>
        <Option Icon={BsCodeSlash} text="Gerador de códigos" action="code" />
        <Option Icon={BsImage} text="Edição de foto" action="image" />
        <Option
          Icon={AiOutlinePlayCircle}
          text="Geração de vídeos"
          action="video"
        />
        <Option
          Icon={FiMusic}
          text="Criador de áudios e musicas "
          action="music"
        />
      </div>
    </Providers>
  );
}
