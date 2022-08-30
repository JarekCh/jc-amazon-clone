export const initialState = {
  cart: [],
  total: 0,
};

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
