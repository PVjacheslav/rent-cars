import { SearchForm } from 'components/SearchForm/SearchForm';
import { LoadMoreBtn, Wrapper } from './CarsCatalogPage.styled';
import { CarsList } from 'components/CarList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';

export default function CarsCatalogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;
  const totalItems = 32;

  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  function handleLoadMore() {
    if (currentPage * itemsPerPage <= totalItems) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <Wrapper>
      <SearchForm />
      <CarsList />
      {cars.length > 0 && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </Wrapper>
  );
}
