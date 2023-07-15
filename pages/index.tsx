import styles from "../styles/Home.module.css";
import { Options } from "../components";
import { Input } from "@src/components";XMLHttpRequest
import { PiMagicWandBold } from "react-icons/pi";


export default function Index() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.iconArea}>
          <PiMagicWandBold />
        </div>

        <h1>Experimente o poder da Inteligencia Artificial</h1>
      </header>
      <Options />
      <Input />
    </div>
  );
}
