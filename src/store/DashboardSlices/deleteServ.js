import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let deleteServProFunc = createAsyncThunk(
  "deleteServPro/deleteServProFunc",
  async (id) => {
    try {
      let res = await axios.delete(
        `${baseUrl}nova/api/subcategory/deleteone/${id}`
      );
      toast.success("تم الحذف بنجاح");
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export let deleteServProSlice = createSlice({
  name: "deleteServPro",
  initialState: {
    isLoadingDel: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deleteServProFunc.fulfilled, (state) => {
      state.isLoadingDel = false;
    });
    builder.addCase(deleteServProFunc.pending, (state) => {
      state.isLoadingDel = true;
    });
    builder.addCase(deleteServProFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.isLoadingDel = false;
    });
  },
});
export default deleteServProSlice.reducer;
