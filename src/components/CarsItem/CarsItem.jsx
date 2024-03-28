import { useDispatch, useSelector } from "react-redux";
import { selectCars } from "redux/cars/selectors";
import { selectFavorite } from "redux/favorites/selectors";
import { addFavorites, deleteFavorites } from "redux/favorites/slice";
import { BrandTitle, Button, CarInfo, DescrWrapper, EmptyHeart, FullHeart, IconFavoriteBtn, Img, ImgWrapper, Item, Price, SpanModel } from "./CarsItem.styled";

export const CarsItem = ({ carInfo, modalOpen }) => {
  const {
    id,
    year,
    make,
    model,
    img,
    rentalPrice,
    rentalCompany,
    functionalities,
    address,
  } = carInfo;

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorite);
  const isFavorite = favorites.some(favCar => favCar.id === id);

  const handleAddFavorites = id => {
    const car = cars.find(car => car.id.toString().includes(id));
    if (!isFavorite) {
      dispatch(addFavorites(car));
    } else {
      dispatch(deleteFavorites(id.toString()));
    }
  };

  return (
    <Item>
      <ImgWrapper>
        <Img src={img} alt={model} />
        <IconFavoriteBtn type="button" onClick={() => handleAddFavorites(id)}>
          {isFavorite ? <FullHeart /> : <EmptyHeart />}
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
        &ensp;|&ensp;{rentalCompany}&ensp;|&ensp;Premium Suv&ensp;|&ensp;{model}
        &ensp;|&ensp;{id}
        &ensp;|&ensp;{functionalities[0]}
      </CarInfo>

      <Button type="button" onClick={() => modalOpen(id)}>
        Learn more
      </Button>
    </Item>
  );
};