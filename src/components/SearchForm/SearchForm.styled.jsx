import { Field } from 'formik';
import styled from 'styled-components';
import Select from 'react-select';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: #8a8a89;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputBrand = styled(Field)`
  border-radius: 14px;
  width: 224px;
  height: 48px;
`;

export const InputPrice = styled(Field)`
  border-radius: 14px;
  padding: 14px 18px;
  width: 125px;
  height: 48px;
`;

export const DropDownBrand = styled(Select)`
  border-radius: 14px;
`;

export const DropDownPrice = styled(Select)`
  border-radius: 14px;
`;

export const customBrandStyles = {
  container: (provided, state) => ({
    ...provided,
    backgroundColor: '#f7f7fb',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f7f7fb',
    borderRadius: '14px',
    border: 'none',
    width: '224px',
    height: '48px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgba(18, 20, 23, 0.2)',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
    cursor: 'pointer',
  }),
};

export const customPriceStyles = {
  container: (provided, state) => ({
    ...provided,
    backgroundColor: '#f7f7fb',
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f7f7fb',
    borderRadius: '14px',
    border: 'none',
    width: '125px',
    height: '48px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: '#fff',
    color: 'rgba(18, 20, 23, 0.2)',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '1.2',
    cursor: 'pointer',
  }),
};

export const LabelWrapp = styled.label`
  display: flex;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: #8a8a89;
  flex-direction: column;
  gap: 8px;
  width: 320px;
`;

export const InputWrapp = styled.div`
  display: flex;
`;

export const InputFrom = styled(Field)`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  border-radius: 14px 0 0 14px;
  border: none;
  border-right: 1px solid rgba(18, 20, 23, 0.5);
  width: 160px;
  height: 48px;
  background: #f7f7fb;
`;

export const InputTo = styled(Field)`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.1;
  color: #121417;
  border-radius: 0 14px 14px 0;
  border: none;
  width: 160px;
  height: 48px;
  background: #f7f7fb;
`;

export const SearchButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  border-radius: 12px;
  border: none;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background: #3470ff;
  cursor: pointer;
  transition: all var(--main-transition);
  &:hover {
    background-color: var(--hover-color);
  }
`;
