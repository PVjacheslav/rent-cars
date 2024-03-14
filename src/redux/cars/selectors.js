import { createSelector } from '@reduxjs/toolkit';

export const selectCars = state => state.cars.cars.items;
export const selectIsLoading = state => state.cars.cars.isLoading;
export const selectError = state => state.cars.cars.error;
export const selectCarId = state => state.cars.id;
export const selectFilter = state => state.cars.filter;

export const selectCarById = createSelector(
  [selectCarId, selectCars],
  (id, cars) => {
    return cars.find(car => car.id.toString().includes(id));
  }
);

export const selectFilteredCars = createSelector(
  [selectFilter, selectCars],
  (savedFilter, cars) => {
    return cars.filter(({ make }) => make.includes(savedFilter));
  }
);
