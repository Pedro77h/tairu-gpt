"use client";

import styles from "../styles/Home.module.css";
import { Input } from "@src/components";
import { selectOption } from "@src/lib/store/reducers/option.reducer";
import { useSelector } from "react-redux";
import { SelectedOption } from "@src/components/SelectedOption";
import { Api, sendMessage } from "@src/lib/api";
import { useEffect } from "react";

export default function Page() {
  const option = useSelector(selectOption);
  return (
    <div className={styles.container}>
      <SelectedOption {...option} />
      <Input />
    </div>
  );
}
