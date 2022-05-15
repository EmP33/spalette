import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  palettes: [],
  favorities: [],
  showPalettes: false,
};

const palettesSlice = createSlice({
  name: "palettes",
  initialState,
  reducers: {
    setPalettes(state, action) {
      state.palettes = action.payload;
    },
    fetchFavorities(state, action) {
      state.favorities = [...action.payload];
    },
    setFavorites(state, action) {
      state.favorities = [...state.favorities, action.payload];
    },
    removeFavorite(state, action) {
      state.favorities = state.favorities.filter(
        (favorite) => favorite !== action.payload
      );
    },
    toggleShow(state) {
      state.showPalettes = !state.showPalettes;
    },
  },
});

export const palettesActions = palettesSlice.actions;

export default palettesSlice;
