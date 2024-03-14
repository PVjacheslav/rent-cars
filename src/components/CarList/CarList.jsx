import { useDispatch, useSelector } from 'react-redux';
import { setId } from 'redux/cars/slice';
import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/cars/operations';
import {
  selectCarById,
  selectCars,
  selectFilteredCars,
} from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import {
  BrandTitle,
  Button,
  CarInfo,
  DescrWrapper,
  EmptyHeart,
  FullHeart,
  IconFavoriteBtn,
  Img,
  ImgWrapper,
  Item,
  List,
  Price,
  SpanModel,
} from './CarList.styled';
import { selectFavorite } from 'redux/favorites/selectors';
import { addFavorites } from 'redux/favorites/slice';

export const CarsList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const oneCar = useSelector(selectCarById);
  const favorites = useSelector(selectFavorite);
  const filtered = useSelector(selectFilteredCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleModalOpen = id => {
    setModalOpen(true);
    dispatch(setId(id));
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleAddFavorites = id => {
    setFavorite(prevState => !prevState);
    const car = cars.find(car => car.id.toString().includes(id));
    const isInFavorite = favorites.find(car => car.id.toString().includes(id));
    if (!isInFavorite) {
      dispatch(addFavorites(car));
    }
  };

  return (
    <>
      <List>
        {filtered.map(
          ({
            id,
            year,
            make,
            model,
            img,
            rentalPrice,
            rentalCompany,
            functionalities,
            address,
          }) => (
            <Item key={id}>
              <ImgWrapper>
                <Img src={img} alt={model} />
                <IconFavoriteBtn
                  type="button"
                  onClick={() => handleAddFavorites(id)}
                >
                  {favorite ? <FullHeart /> : <EmptyHeart />}
                </IconFavoriteBtn>
              </ImgWrapper>
              <DescrWrapper>
                <BrandTitle>
                  {make} <SpanModel>{model}</SpanModel>, {year}
                </BrandTitle>
                <Price>{rentalPrice}</Price>
              </DescrWrapper>

              <CarInfo>
                {address.split(',')[1]}&ensp;|&ensp;{address.split(',')[2]}
                &ensp;|&ensp;{rentalCompany}&ensp;|&ensp;Premium
                Suv&ensp;|&ensp;{model}
                &ensp;|&ensp;{id}
                &ensp;|&ensp;{functionalities[0]}
              </CarInfo>

              <Button type="button" onClick={() => handleModalOpen(id)}>
                Learn more
              </Button>
            </Item>
          )
        )}
      </List>
      {modalOpen && (
        <ModalDetails onClose={handleModalClose} carInfo={oneCar} />
      )}
    </>
  );
};
