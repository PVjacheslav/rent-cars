import { useDispatch, useSelector } from 'react-redux';
import { addFavorites } from 'redux/cars/slice';

import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/cars/operations';
import { selectCars, selectFavoriteCar } from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import {
  BrandTitle,
  Button,
  City,
  DescrWrapper,
  IconFavoriteBtn,
  Img,
  ImgWrapper,
  Item,
  List,
  Price,
  Svg,
  TagsList,
} from './CarList.styled';

export const CarsList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  //   const fav = useSelector(selectFavoriteCar);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const findCarById = carId => {
    const oneCar = cars.find(car => car.id.toString().includes(carId));
    setCurrentCar(oneCar);
  };

  const handleModalOpen = id => {
    setModalOpen(true);
    findCarById(id);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAddFavorites = id => {
    dispatch(addFavorites(id.toString()));
  };

  return (
    <>
      <List>
        {cars.map(
          ({ id, year, make, model, type, img, description, rentalPrice }) => (
            <Item key={id}>
              <ImgWrapper>
                <Img src={img} alt={model} />
                <IconFavoriteBtn type="submit">
                  <Svg
                    width={18}
                    height={18}
                    onClick={() => handleAddFavorites(id)}
                  />
                </IconFavoriteBtn>
              </ImgWrapper>
              <DescrWrapper>
                <BrandTitle>
                  {make} <span>{model}</span>, {year}
                </BrandTitle>
                <Price>{rentalPrice}</Price>
              </DescrWrapper>

              <TagsList>
                <li key="2">
                  <City>Kiev</City>
                </li>
                <li key="3">
                  <City>Lviv</City>
                </li>
              </TagsList>

              <Button type="button" onClick={() => handleModalOpen(id)}>
                Learn more
              </Button>
            </Item>
          )
        )}
      </List>
      {modalOpen && (
        <ModalDetails onClose={handleModalClose} carInfo={currentCar} />
      )}
    </>
  );
};
