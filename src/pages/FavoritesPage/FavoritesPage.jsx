import { useDispatch, useSelector } from 'react-redux';
import { selectCarById } from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import { List, Wrapper, Title } from './FavoritesPage.styled';
import { useState } from 'react';
import { setId } from 'redux/cars/slice';
import { selectFavorite } from 'redux/favorites/selectors';
import { CarsItem } from 'components/CarsItem/CarsItem';

export default function FavoritesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorite);
  const oneCar = useSelector(selectCarById);

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
      <List>
        {favoriteCars.map(car => (
          <CarsItem key={car.id} carInfo={car} modalOpen={handleModalOpen} />
        ))}
      </List>
      {modalOpen && (
        <ModalDetails onClose={handleModalClose} carInfo={oneCar} />
      )}
    </Wrapper>
  );
}
