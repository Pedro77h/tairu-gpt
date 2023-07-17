import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { OptionHeader } from "../OptionHeader";
import {
  OptionState,
  choiceOption,
} from "@src/lib/store/reducers/option.reducer";
import { Options } from "../Options";
import { useAppDispatch } from "@src/lib/store/hooks";

interface SelectedOptionProps extends OptionState {}

export const SelectedOption = ({ icon, title, type }: SelectedOptionProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {type !== "home" && (
        <FaArrowLeft
          size={20}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(choiceOption("home"))}
        />
      )}
      <OptionHeader Icon={icon} title={title} />
      {type === "home" && <Options />}
    </>
  );
};
