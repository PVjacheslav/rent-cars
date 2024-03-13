import { SearchForm } from 'components/SearchForm/SearchForm';
import { Wrapper } from './CarsCatalogPage.styled';
import { CarsList } from 'components/CarList/CarList';

export default function CarsCatalogPage() {
  return (
    <Wrapper>
      <SearchForm />
      <CarsList />
    </Wrapper>
  );
}
