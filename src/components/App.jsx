import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CarsCatalogPage = lazy(() => import('../pages/CarsCatalogPage/CarsCatalogPage'));
const FavoritesPage = lazy(() => import('../pages/FavoritesPage/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CarsCatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
