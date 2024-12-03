import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let deleteInstaProFunc = createAsyncThunk(
  "deleteInstaPro/deleteInstaProFunc",
  async (id) => {
    try {
      let res = await axios.delete(`${baseUrl}nova/api/work/deleteone/${id}`);
      toast.success("تم الحذف بنجاح");
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export let deleteInstaProSlice = createSlice({
  name: "deleteInstaPro",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteInstaProFunc.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteInstaProFunc.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteInstaProFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.isLoading = false;
    });
  },
});
export default deleteInstaProSlice.reducer;
