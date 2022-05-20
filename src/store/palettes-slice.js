import { createSlice } from "@reduxjs/toolkit";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

const initialState = {
  palettes: [],
  palette: {},
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
    setCurrentPalette(state, action) {
      state.palette = action.payload;
    },
    toggleShow(state) {
      state.showPalettes = !state.showPalettes;
    },
  },
});

export const getPalettes = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const palettesRef = ref(database, `palettes`);
      onValue(palettesRef, (snapshot) => {
        const data = snapshot.val();

        dispatch(palettesActions.setPalettes(data));
      });
    };
    sendRequest();
  };
};

export const getPalette = (id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const palettesRef = ref(database, `palettes/${id}`);
      onValue(palettesRef, (snapshot) => {
        const data = snapshot.val();
        dispatch(palettesActions.setCurrentPalette(data));
      });
    };
    sendRequest();
  };
};

export const palettesActions = palettesSlice.actions;

export default palettesSlice;
