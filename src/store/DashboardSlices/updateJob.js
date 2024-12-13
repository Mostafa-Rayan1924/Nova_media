import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let updateJobProFunc = createAsyncThunk(
  "updateJobPro/updateJobProFunc",
  async ({ id, data }, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.patch(`${baseUrl}nova/api/job/update/${id}`, data, {
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
export let updateJobProSlice = createSlice({
  name: "updateJobPro",
  initialState: {
    Loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateJobProFunc.pending, (state) => {
        state.Loading = true;
      })
      .addCase(updateJobProFunc.fulfilled, (state) => {
        state.Loading = false;
      })
      .addCase(updateJobProFunc.rejected, (state, action) => {
        state.Loading = false;
        toast.error(action.error.message);
      });
  },
});
export default updateJobProSlice.reducer;
