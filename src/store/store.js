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
import deleteInstaProSlice from "./DashboardSlices/deleteInstaPro";
import addInstaProSlice from "./DashboardSlices/addInstaPro";
import deleteServProSlice from "./DashboardSlices/deleteServ";
import addServSlice from "./DashboardSlices/addServ";
import delTeamSlice from "./DashboardSlices/removeTeam";
import addTeamProSlice from "./DashboardSlices/addTeam";
import deleteExhProSlice from "./DashboardSlices/deleteExh";
import addExhSlice from "./DashboardSlices/addExh";
import getJobSlice from "./AdsSlices/getJobSlice";
import delJobSlice from "./DashboardSlices/removeJobAds";
import addJobAdSlice from "./DashboardSlices/addJobAds";
import applyJobSlice from "./DashboardSlices/applyToJob";

export let store = configureStore({
  reducer: {
    // home reducer
    banners: bannerSlice,
    categories: catSlice,
    homeProjects: latestprojectsSlice,
    homeCustomers: latestCustomerslice,
    filterCatsById: filterCategoriesSlice,
    signUp: signUpSlice,
    login: LoginSlice,
    // end homer reducedr
    // home dashboard
    addBanner: addBannerSlice,
    addCustomer: addCustomerSlice,
    addInstaPro: addInstaProSlice,
    deleteBanner: delBannerSlice,
    delCustomer: delCustomerSlice,
    delProInsta: deleteInstaProSlice,
    //end home dashboard
    // sercvice reducer
    deleteServ: deleteServProSlice,
    addServ: addServSlice,
    // end service
    // team reducer
    teamData: teamSlice,
    delTeam: delTeamSlice,
    addTeam: addTeamProSlice,
    // end team
    // exhibtions reducer
    exhibtionsFilter: filterSlice,
    getOneExhibtion: filterSliceById,
    addComment: addCommentSlice,
    deleteExh: deleteExhProSlice,
    addExh: addExhSlice,
    // end exhibtions
    // ads
    getJobs: getJobSlice,
    delJobAds: delJobSlice,
    addJobAds: addJobAdSlice,
    applyJob: applyJobSlice,
    // end ads
  },
});
