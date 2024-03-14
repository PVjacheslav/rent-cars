import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 20, 23, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 20px;
  border-radius: 24px;
  width: 541px;
  // height: 752px;
  background-color: var(--white-text-color);
`;

export const ModalContainer = styled.div`
  padding: 40px;
  position: relative;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 24px;
  color: var(--main-text-color);
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  transition: all var(--main-transition);
  &:hover {
    transform: rotate(90deg);
    color: var(--accent-color);
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  width: 461px;
  height: 248px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
`;

export const IconFavoriteBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const DescrWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BrandTitle = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  color: #121417;
`;

export const SpanModel = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  color: var(--accent-color);
`;

export const Info = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 28px;
  width: 277px;
  height: 40px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const CarDescr = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  color: var(--main-text-color);
  margin-bottom: 24px;
`;

export const AccessoriesTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: var(--main-text-color);
  margin-bottom: 8px;
`;

export const Accessories = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);

  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
  margin-bottom: 24px;
`;

export const ConditionsTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  color: var(--main-text-color);
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Items = styled.li`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #363535;
  border-radius: 35px;
  padding: 7px 14px;
  background: #f9f9f9;
`;

export const ItemsSpan = styled.span`
  font-weight: 600;
  color: #3470ff;
`;

export const Button = styled.a`
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
  color: var(--white-text-color);
  border-radius: 12px;
  border: none;
  padding: 12px 50px;
  background-color: var(--accent-color);
  cursor: pointer;
  transition: all var(--main-transition);
  &:hover {
    background-color: var(--hover-color);
  }
`;