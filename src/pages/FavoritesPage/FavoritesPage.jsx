import { useDispatch, useSelector } from 'react-redux';
import { selectCarById } from 'redux/cars/selectors';
import { ModalDetails } from 'components/ModalDetails/ModalDetails';
import {
  List,
  Item,
  ImgWrapper,
  Img,
  IconFavoriteBtn,
  DescrWrapper,
  BrandTitle,
  Price,
  TagsList,
  Button,
  City,
  FullHeart,
  EmptyHeart,
} from './FavoritesPage.styled';
import { useState } from 'react';
import { setId } from 'redux/cars/slice';
import { selectFavorite } from 'redux/favorites/selectors';
import { deleteFavorites } from 'redux/favorites/slice';

export default function FavoritesPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [favorite, setFavorite] = useState(true);

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

  const handleDeleteFavorites = id => {
    setFavorite(false);
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
                <IconFavoriteBtn
                  type="submit"
                  onClick={() => handleDeleteFavorites(id)}
                >
                  {favorite ? <FullHeart /> : <EmptyHeart />}
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
        <ModalDetails onClose={handleModalClose} carInfo={oneCar} />
      )}
    </>
  );
}
