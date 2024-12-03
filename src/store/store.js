import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./HomeSlices/bannerSlice";
import catSlice from "./HomeSlices/CategoriesSlice";
import latestprojectsSlice from "./HomeSlices/LatestProjectsSlice";
import latestCustomerslice from "./HomeSlices/HomeCustomersSlice";
import filterCategoriesSlice from "./CategorySlices/filterCats";
import signUpSlice from "./AuthSlices/signupSlice";
import LoginSlice from "./AuthSlices/loginSlice";
import addBannerSlice from "./DashboardSlices/addBanner";
import delBannerSlice from "./DashboardSlices/removeBanner";
import teamSlice from "./TeamSlices/teamSlice";
import filterSlice from "./ExhibthionsSlice/FilterSlice";
import filterSliceById from "./ExhibthionsSlice/getById";
import addCommentSlice from "./ExhibthionsSlice/addCommentSlice";
import delCustomerSlice from "./DashboardSlices/removeCustomer";
import addCustomerSlice from "./DashboardSlices/addCustomer";

export let store = configureStore({
  reducer: {
    banners: bannerSlice,
    categories: catSlice,
    homeProjects: latestprojectsSlice,
    homeCustomers: latestCustomerslice,
    filterCatsById: filterCategoriesSlice,
    signUp: signUpSlice,
    login: LoginSlice,
    addBanner: addBannerSlice,
    addCustomer: addCustomerSlice,
    deleteBanner: delBannerSlice,
    delCustomer: delCustomerSlice,
    teamData: teamSlice,
    exhibtionsFilter: filterSlice,
    getOneExhibtion: filterSliceById,
    addComment: addCommentSlice,
  },
});
