import { Formik, Form } from 'formik';
import { useState } from 'react';
import { FormWrapper, InputBrand, InputPrice, Label, SearchButton } from './SearchForm.styled';

export const SearchForm = () => {
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = () => {
        console.log(brand);
    };
    return (
        <Formik onSubmit={handleSubmit}>
            <Form autoComplete="off">
                <FormWrapper>
                    <Label htmlFor="color">
                        Car brand
                        <InputBrand
                            as="select"
                            name="color"
                            onChange={e => setBrand(e.target.value)}
                            value={brand}
                        >
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </InputBrand>
                    </Label>
                    <Label htmlFor="price">
                        Price/ 1 hour
                        <InputPrice
                            as="select"
                            name="price"
                            onChange={e => setPrice(e.target.value)}
                            value={price}
                        >
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                        </InputPrice>
                    </Label>
                    <SearchButton type="submit">Search</SearchButton>
                </FormWrapper>
            </Form>
        </Formik>
    );
};