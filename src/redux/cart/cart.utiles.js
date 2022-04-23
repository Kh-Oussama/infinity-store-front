export const addItemToCart = (cartItems, cartItemToAdd) => {

  const existingCartItem = cartItems.find(
      cartItem =>
          cartItem.id === cartItemToAdd.id
          &&
          cartItem.size?.name === cartItemToAdd.size?.name
         &&
          cartItem.color?.name === cartItemToAdd.color?.name
  );


  if (existingCartItem) {
      return cartItems.map(
              cartItem =>
                  cartItem.id === cartItemToAdd.id
                  &&
                  cartItem.size?.name === cartItemToAdd.size?.name
                  &&
                  cartItem.color?.name === cartItemToAdd.color?.name
      ? {...cartItem, quantity: cartItem.quantity+1}
      : cartItem
      )
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const clearItemFromCart = (cartItems, cartItemToRemove) => {
    return cartItems.filter(
        cartItem =>
            cartItem.id !== cartItemToRemove.id
            ||
            cartItem.size?.name !== cartItemToRemove.size?.name
            ||
            cartItem.color?.name !== cartItemToRemove.color?.name
    )
};

export const removeItemFromCart = (carteItems, cartItemToRemove) => {
    const existingCartItem = carteItems.find(
        cartItem =>
            cartItem.id === cartItemToRemove.id
            &&
            cartItem.size?.name === cartItemToRemove.size?.name
            &&
            cartItem.color?.name === cartItemToRemove.color?.name
    );

    if(existingCartItem.quantity === 1) {
        return clearItemFromCart(carteItems,cartItemToRemove);
    }

    return carteItems.map(
        cartItem =>
            cartItem.id === cartItemToRemove.id
            &&
            cartItem.size?.name === cartItemToRemove.size?.name
            &&
            cartItem.color?.name === cartItemToRemove.color?.name
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
};
