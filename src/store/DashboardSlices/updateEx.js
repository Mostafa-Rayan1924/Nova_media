import { baseUrl } from "@/components/constants/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export let editExhFunc = createAsyncThunk(
  "editExh/editExhFunc",
  async ({ id, data }, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.patch(
        `${baseUrl}nova/api/exhibition/update/${id} `,
        data,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("تم التعديل بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let editExhSlice = createSlice({
  name: "editExh",
  initialState: {
    Isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(editExhFunc.fulfilled, (state) => {
      state.Isloading = false;
    });
    builder.addCase(editExhFunc.pending, (state) => {
      state.Isloading = true;
    });
    builder.addCase(editExhFunc.rejected, (state, action) => {
      toast.error(action.error.message);
      state.Isloading = false;
    });
  },
});
export default editExhSlice.reducer;
