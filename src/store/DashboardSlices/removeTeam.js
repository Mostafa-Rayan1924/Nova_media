import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let delTeamFunc = createAsyncThunk("delTeam/delTeamFunc", async (id) => {
  try {
    let res = await axios.delete(`${baseUrl}nova/api/team/deleteone/${id}`);
    toast.success("تم الحذف بنجاح");
    return res.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});
export let delTeamSlice = createSlice({
  name: "delTeam",
  initialState: {
    Isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(delTeamFunc.fulfilled, (state) => {
      state.Isloading = false;
    });
    builder.addCase(delTeamFunc.pending, (state) => {
      state.Isloading = true;
    });
    builder.addCase(delTeamFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.Isloading = false;
    });
  },
});
export default delTeamSlice.reducer;
