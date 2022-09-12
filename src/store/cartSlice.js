const { createSlice } = require("@reduxjs/toolkit");

const initailState = [];
const cartSlice = createSlice({
  name: "slice",
  initailState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
