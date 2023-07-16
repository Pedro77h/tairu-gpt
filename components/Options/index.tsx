import { Option } from "../Option";
import { BsCodeSlash, BsImage } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";

import styles from "./styles.module.css";

export const Options = () => {
  return (
    <div className={styles.options}>
      <Option Icon={BsCodeSlash} text="Gerador de códigos" />
      <Option Icon={BsImage} text="Edição de foto" />
      <Option Icon={AiOutlinePlayCircle} text="Geração de vídeos" />
      <Option Icon={FiMusic} text="Criador de áudios e musicas " />
    </div>
  );
};
