export const initialState = {
  cart: [],
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  if (action.type === 'ADD_TO_CART') {
    return {
      ...state,
      cart: [...state.cart, action.item],
    };
  }

  if (action.type === 'GET_TOTALS') {
  }
};

export default reducer;
