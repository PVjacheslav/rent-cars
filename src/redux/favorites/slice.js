import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },

  reducers: {
    addFavorites(state, action) {
      state.favorite.push(action.payload);
    },
    deleteFavorites(state, action) {
      const updateFavorites = state.favorite.filter(
        car => car.id.toString() !== action.payload
      );
      state.favorite = updateFavorites;
    },
  },
});

export const { addFavorites, deleteFavorites } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
