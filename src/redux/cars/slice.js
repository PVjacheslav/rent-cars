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
      favorites: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  reducers: {
    addFavorites(state, action) {
      const carById = state.cars.items.find(car =>
        car.id.toString().includes(action.payload)
      );
      state.cars.favorites.push(carById);
    },
    deleteFavorites(state, action) {
      const updateFavorites = state.cars.favorites.filter(
        car => car.id.toString() !== action.payload
      );
      state.cars.favorites = updateFavorites;
    },
  },
  extraReducers: {
    // pending
    [fetchCars.pending]: handlePending,

    // rejected
    [fetchCars.rejected]: handleRejected,

    // fulfilled
    [fetchCars.fulfilled](state, action) {
      state.cars.isLoading = false;
      state.cars.error = null;
      state.cars.items = action.payload;
    },
  },
});

export const { addFavorites, deleteFavorites } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
