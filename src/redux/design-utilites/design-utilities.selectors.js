import {createSelector} from 'reselect';

const selectDesignUtilities = state => state.design_utilities;

export const selectAuthComponentHidden = createSelector(
    [selectDesignUtilities],
    design_utilities => design_utilities.auth_component_hidden,
);

export const selectCurrentAuthComponent = createSelector(
    [selectDesignUtilities],
    design_utilities => design_utilities.current_auth_component,
);


