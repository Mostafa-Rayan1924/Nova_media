import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let updateTeamProFunc = createAsyncThunk(
  "updateTeamPro/updateTeamProFunc",
  async ({ id, data }, { getState }) => {
    let state = getState();
    let token = state.login?.user?.token;
    try {
      let res = await axios.patch(
        `${baseUrl}nova/api/team/update/${id}`,
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
export let updateTeamProSlice = createSlice({
  name: "updateTeamPro",
  initialState: {
    Loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTeamProFunc.pending, (state) => {
        state.Loading = true;
      })
      .addCase(updateTeamProFunc.fulfilled, (state) => {
        state.Loading = false;
      })
      .addCase(updateTeamProFunc.rejected, (state, action) => {
        state.Loading = false;
        toast.error(action.error.message);
      });
  },
});
export default updateTeamProSlice.reducer;
