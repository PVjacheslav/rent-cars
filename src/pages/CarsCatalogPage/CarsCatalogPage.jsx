import { SearchForm } from 'components/SearchForm/SearchForm';
import { Wrapper } from './CarsCatalogPage.styled';
import { CarsList } from 'components/CarList/CarList';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCars } from 'redux/cars/operations';

export default function CarsCatalogPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [currentPage, dispatch]);

  function handleLoadMore() {
    setCurrentPage(prevPage => prevPage + 1);
  }

  return (
    <Wrapper>
      <SearchForm />
      <CarsList pages={currentPage} />
      <button type="button" onClick={handleLoadMore}>
        Load more
      </button>
    </Wrapper>
  );
}
