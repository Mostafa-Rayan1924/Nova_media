import { baseUrl } from "@/components/constants/api";
import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
let initialState = {
  projects: [],
  loading: false,
  error: null,
};
export let GetProjects = createAsyncThunk("project/getProjects", async () => {
  try {
    let { data } = await axios.get(`${baseUrl}nova/api/work/getall`);
    return data.data;
  } catch (error) {
    throw new Error(error.message);
  }
});
export let latestprojectsSlice = createSlice({
  name: "Homeprojects",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    });
    builder.addCase(GetProjects.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetProjects.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});
export default latestprojectsSlice.reducer;
