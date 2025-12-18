import { createAsyncThunk } from "@reduxjs/toolkit";
import { Leader } from "../../domain/domain";
import { getRandom } from "../../api/get_random";

export const getRandomThunk = createAsyncThunk<Leader, void>(
  "leader/getRandom",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await getRandom();
      return resp;
    } catch (err) {
      if (err instanceof Error) {
        return rejectWithValue({ message: err.message });
      }

      return rejectWithValue({ message: "Unexpected error occurred" });
    }
  }
);
