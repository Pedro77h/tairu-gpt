import styles from "../styles/Home.module.css";
import { Options } from "../components";
import { Input } from "@src/components";
import Image from "next/image";
import MagicWard from "@src/assets/icons/MagicWard.svg";



export default function Home() {
  console.log("home page");

  return (
    <div className={styles.container}>
      <header>
        <div className={styles.iconArea}>
          <Image src={MagicWard} alt={""} />
        </div>
        <h1>Experimente o poder da Inteligencia Artificial</h1>
      </header>
      <Options />
      <Input />
    </div>
  );
}