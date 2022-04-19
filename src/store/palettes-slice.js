import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  palettes: [],
  favorities: [],
};

const palettesSlice = createSlice({
  name: "palettes",
  initialState,
  reducers: {
    setPalettes(state, action) {
      state.palettes = action.payload;
    },
  },
});

export const palettesActions = palettesSlice.actions;

export default palettesSlice;
