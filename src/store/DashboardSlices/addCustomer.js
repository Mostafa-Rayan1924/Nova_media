import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
let initialState = {
  loading: false,
  error: null,
};
export let addCustomerFunc = createAsyncThunk(
  "addCustomer/addCustomerFunc",
  async ({ formData, headers }) => {
    try {
      let res = await axios.post(
        `${baseUrl}nova/api/partner/create`,
        formData,
        {
          headers: headers,
        }
      );
      toast.success("تم الاضافة بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let addCustomerSlice = createSlice({
  name: "addCustomer",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addCustomerFunc.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addCustomerFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCustomerFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.loading = false;
    });
  },
});
export default addCustomerSlice.reducer;
