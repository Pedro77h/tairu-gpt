import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

type OptionType = "home" | "code" | "image" | "video" | "music";

interface OptionState {
  option: OptionType;
}

const initialState: OptionState = {
  option: "home",
};

export const OptionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    choiceOption: (state, action: PayloadAction<OptionType>) => {
      state.option = action.payload;
    },
  },
});

export const { choiceOption } = OptionSlice.actions;

export const selectOption = (state: RootState) => state.option.option;

export default OptionSlice.reducer;
