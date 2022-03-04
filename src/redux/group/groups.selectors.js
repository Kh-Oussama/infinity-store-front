import { createSelector } from "reselect";

const selectGroup = state => state.group;

//fetch all groups selectors
export const selectFetchGroupsLoading = createSelector(
    [selectGroup],
    group => group.fetchAllGroupsLoading,
);
export const selectGroups = createSelector(
    [selectGroup],
    group => group.groups,
);
export const selectFetchGroupsError = createSelector(
    [selectGroup],
    group => group.fetchAllGroupsError,
);

//Get group selectors
export const selectGetGroupLoading = createSelector(
    [selectGroup],
    group => group.getGroupLoading,
);
export const selectGroupVar = createSelector(
    [selectGroup],
    group => group.group,
);
export const selectGetGroupError = createSelector(
    [selectGroup],
    group => group.getGroupError,
);
