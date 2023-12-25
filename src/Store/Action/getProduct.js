// Import createAsyncThunk from @reduxjs/toolkit
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../../Api";

// Redux slice
const productSlice = createSlice({
  name: "Products",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { fetchP } = productSlice.actions;
export default productSlice.reducer;

// Thunk
export const fetchProducts = createAsyncThunk("get/Products", async () => {
  const data = await allProducts();
  return data.data;
});
