import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./HomeSlices/bannerSlice";
import catSlice from "./HomeSlices/CategoriesSlice";

export let store = configureStore({
  reducer: {
    banners: bannerSlice,
    categories: catSlice,
  },
});
