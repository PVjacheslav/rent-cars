import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = new URL('https://65da2762bcc50200fcdca954.mockapi.io/cars');

export const fetchCars = createAsyncThunk(
  'cars/fetchAllCars',
  async (_, { rejectWithValue }) => {
    try {
      const cars = await axios.get(`${BASE_URL}`);
      return cars.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
