import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
   type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
   type: CartActionTypes.ADD_ITEM,
   payload: item,
});

export const removeItem = item => ({
    type: CartActionTypes.ROMOVE_Item,
    payload: item,
});

export const clearItemFromCart = item =>  ({
    type: CartActionTypes.CLEAR_Item_FROM_CART,
    payload: item,
});

export const clearCart = () => ({
   type: CartActionTypes.CLEAR_CART,
});
