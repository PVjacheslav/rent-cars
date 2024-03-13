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
  background-color: rgba(46, 47, 66, 0.4);
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 20px;
  border-radius: 24px;
  width: 541px;
  height: 752px;
  background-color: #fff;
`;

export const ModalContainer = styled.div`
  padding: 40px;
  position: relative;
`;

export const CloseIcon = styled(IoClose)`
  font-size: 24px;
  /* color: ; */
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  transition: all var(--primary-transition);
  &:hover {
    transform: rotate(90deg);
    /* color: ; */
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 14px;
  height: 248px;
  overflow: hidden;
  margin-bottom: 14px;
`;

export const Img = styled.img``;

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
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;
export const Price = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 28px;
`;
export const City = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
`;