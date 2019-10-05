import { createSelector } from "reselect";

const getState = state => state.toastr;

export const getToastrConfig = createSelector(
    getState,
    config => config,
);