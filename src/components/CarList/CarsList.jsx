import { useDispatch, useSelector } from 'react-redux';
import { setId } from 'redux/cars/slice';
import { useState } from 'react';
import {
  selectBrand,
  selectCarById,
  selectCars,
  selectFrom,
  selectPrice,
  selectTo,
} from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import {List} from './CarsList.styled';
import { CarsItem } from 'components/CarsItem/CarsItem';

export const CarsList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const oneCar = useSelector(selectCarById);
  const cars = useSelector(selectCars);
  const brand = useSelector(selectBrand);
  const price = useSelector(selectPrice);
  const from = useSelector(selectFrom);
  const to = useSelector(selectTo);

  const filtered = cars.filter(car => {
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
    <>
      <List>
        {filtered.map(car => (
          <CarsItem key={car.id} carInfo={car} modalOpen={handleModalOpen} />
        ))}
      </List>
      {modalOpen && (
        <ModalDetails onClose={handleModalClose} carInfo={oneCar} />
      )}
    </>
  );
};
