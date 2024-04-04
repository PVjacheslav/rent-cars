import { useDispatch, useSelector } from 'react-redux';
import {
  selectBrand,
  selectCarById,
  selectFrom,
  selectPrice,
  selectTo,
} from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import { List, Wrapper, Title } from './FavoritesPage.styled';
import { useState } from 'react';
import { setId } from 'redux/cars/slice';
import { selectFavorite } from 'redux/favorites/selectors';
import { CarsItem } from 'components/CarsItem/CarsItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';

export default function FavoritesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorite);
  const oneCar = useSelector(selectCarById);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const from = useSelector(selectFrom);
  const to = useSelector(selectTo);

  const filtered = favoriteCars.filter(car => {
    if (brand && car.make !== brand) {
      return false;
    }
    if (price) {
      const carPrice = parseFloat(car.rentalPrice.replace('$', ''));
      if (carPrice > parseFloat(price)) {
        return false;
      }
    }
    if (from && car.mileage < parseInt(from, 10)) {
      return false;
    }
    if (to && car.mileage > parseInt(to, 10)) {
      return false;
    }
    return true;
  });

  const handleModalOpen = id => {
    setModalOpen(true);
    dispatch(setId(id));
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Title>Favorite cars</Title>
      <SearchForm />
      {favoriteCars.length === 0 ? (
        <Loader />
      ) : (
        <List>
          {filtered.map(car => (
            <CarsItem key={car.id} carInfo={car} modalOpen={handleModalOpen} />
          ))}
        </List>
      )}
      {modalOpen && (
        <ModalDetails onClose={handleModalClose} carInfo={oneCar} />
      )}
    </Wrapper>
  );
}
