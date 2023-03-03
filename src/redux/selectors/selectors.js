export const loading = (state) => state.auth.loading;
export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const errorMessage = (state) => state.auth.error;
export const userData = (state) => state.auth.user
//-------------------------------------------------------------------
export const honeyLoading = (state) => state.getHoney.loading;
export const honeyList = (state) => state.getHoney.list;
export const honeyItem = (state) => state.getHoney.data;
export const getHoneyFilter = (state) => state.filterHoney;

//-------------------------------------------------------------------



export const shoppingCartList =(state) => state.shoppingcart;
export const shoppingCartListTest =(state) => state.shoppingcart.data;
export const wishCartList = (state) => state.wishlistcart;

