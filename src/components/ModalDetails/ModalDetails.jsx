import { useEffect } from "react";
import { BackDrop, BrandTitle, City, CloseIcon, DescrWrapper, Img, ImgWrapper, Modal, ModalContainer, TagsList } from "./ModalDetails.styled";

export const ModalDetails = ({ onClose, carInfo }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  } = carInfo;

  useEffect(() => {
    const handleCloseOnKeydown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleCloseOnKeydown);

    return () => {
      window.removeEventListener('keydown', handleCloseOnKeydown);
    };
  }, [onClose]);

  const handleCloseOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <BackDrop onClick={handleCloseOnBackdrop}>
      <Modal>
        <ModalContainer>
          <CloseIcon onClick={() => onClose()} />
          <ImgWrapper>
            <Img src={img} alt={model} />
          </ImgWrapper>
          <DescrWrapper>
            <BrandTitle>
              {make} <span>{model}</span>, {year}
            </BrandTitle>
          </DescrWrapper>
          <TagsList>
            <li key="2">
              <City>Kiev</City>
            </li>
            <li key="3">
              <City>Lviv</City>
            </li>
          </TagsList>

          <p>{description}</p>

          <h2>Accessories and functionalities:</h2>
          <TagsList>
            <li key="5">
              <City>Accesor</City>
            </li>
            <li key="7">
              <City>function</City>
            </li>
          </TagsList>

          <h2>Rental Conditions: </h2>
          <ul>
            <li>Minimum age: 25</li>
            <li>Valid driver’s license</li>
            <li>Security deposite required </li>
            <li>Mileage: {mileage}</li>
            <li>Price: {rentalPrice}</li>
          </ul>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};