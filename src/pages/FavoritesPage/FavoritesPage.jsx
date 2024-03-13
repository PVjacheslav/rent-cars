import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCar } from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import {
  List,
  Item,
  ImgWrapper,
  Img,
  IconFavoriteBtn,
  Svg,
  DescrWrapper,
  BrandTitle,
  Price,
  TagsList,
  Button,
  City,
} from './FavoritesPage.styled';
import { useState } from 'react';
import { deleteFavorites } from 'redux/cars/slice';

export default function FavoritesPage() {
      const [modalOpen, setModalOpen] = useState(false);
  const [currentCar, setCurrentCar] = useState({});

  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCar);

  const findCarById = carId => {
    const oneCar = favoriteCars.find(car => car.id.toString().includes(carId));
    setCurrentCar(oneCar);
  };

  const handleModalOpen = id => {
    setModalOpen(true);
    findCarById(id);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDeleteFavorites = id => {
    dispatch(deleteFavorites(id.toString()));
  };

  return (
    <>
      <List>
        {favoriteCars.map(
          ({ id, year, make, model, type, img, description, rentalPrice }) => (
            <Item key={id}>
              <ImgWrapper>
                <Img src={img} alt={model} />
                <IconFavoriteBtn type="submit">
                  <Svg
                    width={18}
                    height={18}
                    onClick={() => handleDeleteFavorites(id)}
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
                <li key="23">
                  <City>Kiev</City>
                </li>
                <li key="35">
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
}