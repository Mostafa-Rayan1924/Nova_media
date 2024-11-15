import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./HomeSlices/bannerSlice";
import catSlice from "./HomeSlices/CategoriesSlice";
import latestprojectsSlice from "./HomeSlices/LatestProjectsSlice";

export let store = configureStore({
  reducer: {
    banners: bannerSlice,
    categories: catSlice,
    homeProjects: latestprojectsSlice,
  },
});
