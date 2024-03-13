import { Field } from 'formik';
import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
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
  padding: 14px 89px 14px 18px;
  width: 224px;
  height: 48px;
`;

export const InputPrice = styled(Field)`
  border-radius: 14px;
  padding: 14px 18px;
  width: 125px;
  height: 48px;
`;

export const InputWrapp = styled.div`
  display: flex;
`;

export const InputFrom = styled(Field)`
  width: 100px;
`;

export const InputTo = styled(Field)`
  width: 100px;
`;

export const SearchButton = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: #fff;
  border-radius: 12px;
  height: 48px;
  padding: 14px 44px;
  background: #3470ff;
`;