import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let addTeamProFunc = createAsyncThunk(
  "addTeamPro/addTeamProFunc",
  async (data, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.post(`${baseUrl}nova/api/team/create`, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      toast.success("تم الاضافة بنجاح");
      return res.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data.message);
    }
  }
);
export let addTeamProSlice = createSlice({
  name: "addTeamPro",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTeamProFunc.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTeamProFunc.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(addTeamProFunc.rejected, (state, action) => {
        state.isLoading = false;
        toast.error(action.error.message);
      });
  },
});
export default addTeamProSlice.reducer;
