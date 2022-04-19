import { configureStore } from "@reduxjs/toolkit";

import palettesSlice from "./palettes-slice";

const store = configureStore({
  reducer: { palettes: palettesSlice.reducer },
});

export default store;
