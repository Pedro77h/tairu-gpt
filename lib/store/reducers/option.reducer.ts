import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IconType } from "react-icons";
import { FaMagic } from "react-icons/fa";
import { BsCodeSlash, BsImage } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiMusic } from "react-icons/fi";

import { RootState } from "..";

export type OptionChoice = "home" | "code" | "image" | "video" | "music";

export interface OptionState {
  type: OptionChoice;
  icon: IconType;
  title: string;
}

const initialState: OptionState = {
  type: "home",
  icon: FaMagic,
  title: "Experimente o poder da Inteligência Artificial ",
};

export const OptionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    choiceOption: (state, action: PayloadAction<OptionChoice>) => {
      switch (action.payload) {
        case "home": {
          return {
            type: action.payload,
            icon: FaMagic,
            title: "Experimente o poder da Inteligência Artificial ",
          };
        }
        case "code": {
          return {
            type: action.payload,
            icon: BsCodeSlash,
            title: "Pergunte Algo Sobre Programação",
          };
        }
        case "image": {
          return {
            type: action.payload,
            icon: BsImage,
            title: "De uma pequena descrição sobre a imagem",
          };
        }
        case "video": {
          return {
            type: action.payload,
            icon: AiOutlinePlayCircle,
            title: "Em breve...",
          };
        }
        case "music": {
          return {
            type: action.payload,
            icon: FiMusic,
            title: "Digite o que você quer que seja transcrito",
          };
        }
      }
    },
  },
});

export const { choiceOption } = OptionSlice.actions;

export const selectOption = (state: RootState) => state.option;

export default OptionSlice.reducer;
