import DesignActionTypes from "./design-utilities.types";

export const toggleAuthComponent = current_component => ({
   type: DesignActionTypes.TOGGLE_AUTH_COMPONENT,
   payload: current_component
});

export const switchAuthComponent = current_component => ({
   type: DesignActionTypes.SWITCH_AUTH_COMPONENT,
   payload: current_component
});


export const toggleShopCard = current_state => ({
   type: DesignActionTypes.TOGGLE_SHOP_CARD,
   payload: current_state,
})



