import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let addServFunc = createAsyncThunk(
  "addServ/addServFunc",
  async (data, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.post(
        `${baseUrl}nova/api/subcategory/create`,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
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
export let addServSlice = createSlice({
  name: "addServ",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addServFunc.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(addServFunc.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addServFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.loading = false;
    });
  },
});
export default addServSlice.reducer;
