import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      if (state.items.length === 0) {
        state.items = [...state.items, action.payload];
      } else {
        const isRestaurantSame = state.items.filter(
          (item) => item.restaurantId === action.payload.restaurantId
        );
        if (isRestaurantSame.length > 0) {
          state.items = [...state.items, action.payload];
        } else {
          state.items = [action.payload];
        }
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems = [...state.items];
      if (index >= 0) {
        newItems.splice(index, 1);
      } else {
        console.warn(
          `Cant find item with id ${action.payload.id} as its not in basket`
        );
      }
      state.items = [...newItems];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0); // total = 0, item = {price: 10} => total = 10 , this will give us single total for all item's price in basket

export const selectBasketItemWithId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export default basketSlice.reducer;
