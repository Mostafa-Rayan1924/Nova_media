import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let delCustomerFunc = createAsyncThunk(
  "delCustomer/delCustomerFunc",
  async (id) => {
    try {
      let res = await axios.delete(
        `${baseUrl}nova/api/partner/deleteone/${id}`
      );
      toast.success("تم حذف الشريك بنجاح");
      return res.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
export let delCustomerSlice = createSlice({
  name: "delCustomer",
  initialState: {
    Isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(delCustomerFunc.fulfilled, (state) => {
      state.Isloading = false;
    });
    builder.addCase(delCustomerFunc.pending, (state) => {
      state.Isloading = true;
    });
    builder.addCase(delCustomerFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.Isloading = false;
    });
  },
});
export default delCustomerSlice.reducer;
