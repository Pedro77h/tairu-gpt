"use client";

import styles from "../styles/Home.module.css";
import { Input } from "@src/components";
import { Providers } from "@src/lib/providers";
import { selectOption } from "@src/lib/store/reducers/option.reducer";
import { useSelector } from "react-redux";
import { OptionHeader } from "@src/components/OptionHeader";
import { SelectedOption } from "@src/components/SelectedOption";

export default function Page() {
  const option = useSelector(selectOption);

  return (
    <div className={styles.container}>
      <SelectedOption {...option} />
      <Input />
    </div>
  );
}
