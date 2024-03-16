import { createSlice } from "@reduxjs/toolkit";

import services from '../data/services.json';

const servicesSlice = createSlice({
  name: "services",
  initialState: {
    services: services,
  },

  reducers: {
    addProduct(state, action) {
      // state.products.push(action.payload);
    },

    editProduct(state, action) {
      // let objIndex = state.products.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // state.products[objIndex] = action.payload;
    },

    removeProduct(state, action) {
      // state.products = state.products.filter(
      //   (item) => item.id !== action.payload
      // );
    },
  },
});

export const { getService } = servicesSlice.actions;
export default servicesSlice.reducer;
