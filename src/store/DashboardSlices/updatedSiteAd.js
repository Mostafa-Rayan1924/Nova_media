import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let updatedSiteAdProFunc = createAsyncThunk(
  "updatedSiteAdPro/updatedSiteAdProFunc",
  async ({ id, data }, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.patch(`${baseUrl}nova/api/ad/update/${id}`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("تم التعديل بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let updatedSiteAdProSlice = createSlice({
  name: "updatedSiteAdPro",
  initialState: {
    Loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updatedSiteAdProFunc.pending, (state) => {
        state.Loading = true;
      })
      .addCase(updatedSiteAdProFunc.fulfilled, (state) => {
        state.Loading = false;
      })
      .addCase(updatedSiteAdProFunc.rejected, (state, action) => {
        state.Loading = false;
        toast.error(action.error.message);
      });
  },
});
export default updatedSiteAdProSlice.reducer;
