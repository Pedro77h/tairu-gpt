import styles from "../styles/Home.module.css";
import { Options } from "../components";
import { Input } from "@src/components";
import Image from "next/image";
import MagicWard from "@src/assets/icons/MagicWard.svg";

export default function Page() {
  return (
    //todo: reutilização por action

    <div className={styles.container}>
     
      <Options />
      <Input />
    </div>
  );
}
