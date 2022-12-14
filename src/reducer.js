export const initialState = {
  cart: [],
  user: null,
};

// TODO: add increment and decrement single item
// TODO: add localstorage for cart

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }

  if (action.type === 'EMPTY_BASKET') {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
    let newCart = [...state.cart];

    if (index >= 0) {
      newCart.splice(index, 1);
    } else {
      console.warn(
        `Cant remove product (id: ${action.id}) as its not in basket!`
      );
    }

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.user,
    };
  }
};

export default reducer;
