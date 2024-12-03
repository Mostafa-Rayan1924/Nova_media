import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let addInstaProFunc = createAsyncThunk(
  "addInstaPro/addInstaProFunc",
  async (data, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.post(`${baseUrl}nova/api/work/create`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("تم الاضافة بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let addInstaProSlice = createSlice({
  name: "addInstaPro",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addInstaProFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addInstaProFunc.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addInstaProFunc.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message);
      });
  },
});
export default addInstaProSlice.reducer;
