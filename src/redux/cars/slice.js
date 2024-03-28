import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from 'redux/cars/operations';

const handlePending = state => {
  state.cars.isLoading = true;
};
const handleRejected = (state, action) => {
  state.cars.isLoading = false;
  state.cars.error = action.payload;
};
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: {
      items: [],
      isLoading: false,
      error: null,
    },
    id: '',
    filter: {
      brand: null,
      price: null,
      from: null,
      to: null,
    },
  },

  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },

    setFilter(state, action) {
      state.filter.brand = action.payload.brand.value;
      state.filter.price = action.payload.price.value;
      state.filter.from = action.payload.from;
      state.filter.to = action.payload.to;
    },
  },

  extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.rejected]: handleRejected,
    [fetchCars.fulfilled](state, action) {
      state.cars.isLoading = false;
      state.cars.error = null;
      state.cars.items = action.payload;
    },
  },
});

export const { setId, setFilter } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
