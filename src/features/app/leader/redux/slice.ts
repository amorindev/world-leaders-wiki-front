import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getRandomThunk } from "./thunks/get_random";

const leaderSlice = createSlice({
  name: "leader",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder
      // Get leader random
      .addCase(getRandomThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getRandomThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.leader = action.payload;
      })
      .addCase(getRandomThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error;
      });
  },
});
export const {} = leaderSlice.actions;
export default leaderSlice.reducer;
