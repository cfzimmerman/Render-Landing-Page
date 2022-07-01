import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "general",
  initialState: {
    navOptionsActive: false,
  },
  reducers: {
    setNavOptionsActive: (state, action: PayloadAction<boolean>) => {
      state.navOptionsActive = action.payload;
    },
  },
});

export const { setNavOptionsActive } = slice.actions;
export default slice.reducer;
