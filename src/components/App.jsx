import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import HomePage from "pages/HomePage/HomePage";
import CarsCatalogPage from "pages/CarsCatalogPage/CarsCatalogPage";
import FavoritesPage from "pages/FavoritesPage/FavoritesPage";
import NotFound from "pages/NotFound/NotFound";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CarsCatalogPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
