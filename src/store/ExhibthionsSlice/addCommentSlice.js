import { baseUrl } from "@/components/constants/api";
import axios from "axios";
import toast from "react-hot-toast";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
export let addComment = createAsyncThunk(
  "addComment/addComment",
  async ({ comment, id }, { getState }) => {
    try {
      const state = getState();
      const token = state.login?.user?.token;
      let params = {
        comment: comment,
      };
      let { data } = await axios.post(
        `${baseUrl}nova/api/exhibition/comment/${id}`,
        params,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      toast.success("تم اضافة التقييم بنجاح");
      return data.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
export let addCommentSlice = createSlice({
  name: "addComment",
  initialState: {
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addComment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addComment.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addComment.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});
export default addCommentSlice.reducer;
