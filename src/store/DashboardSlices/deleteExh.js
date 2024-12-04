import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let deleteExhProFunc = createAsyncThunk(
  "deleteExhPro/deleteExhProFunc",
  async (id) => {
    try {
      let res = await axios.delete(
        `${baseUrl}nova/api/exhibition/deleteone/${id}`
      );
      toast.success("تم الحذف بنجاح");
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export let deleteExhProSlice = createSlice({
  name: "deleteExhPro",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteExhProFunc.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteExhProFunc.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteExhProFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.isLoading = false;
    });
  },
});
export default deleteExhProSlice.reducer;
