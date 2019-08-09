export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(c => c.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(c => c.id === cartItemToAdd.id 
      ?  {...c, quantity: c.quantity + 1}
      : c)
  }

  return [...cartItems, {
    ...cartItemToAdd, 
    quantity: 1
  }]
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
