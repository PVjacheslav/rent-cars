import { useEffect } from "react";
import { Accessories, AccessoriesTitle, BackDrop, BrandTitle, Button, CarDescr, CloseIcon, ConditionsList, ConditionsTitle, DescrWrapper, Img, ImgWrapper, Info, Items, ItemsSpan, Modal, ModalContainer, SpanModel } from "./ModalDetails.styled";

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
              {make} <SpanModel>{model}</SpanModel>, {year}
            </BrandTitle>
          </DescrWrapper>
          <Info>
            {address.split(',')[1]}&ensp;|&ensp;{address.split(',')[2]}
            &ensp;|&ensp;Id: {id}&ensp;|&ensp;Year: {year}
            &ensp;|&ensp;Type: {type}
            &ensp;|&ensp;Fuel Consumption: {fuelConsumption}&ensp;|&ensp;Engine
            Size: {engineSize}
          </Info>

          <CarDescr>{description}</CarDescr>

          <AccessoriesTitle>Accessories and functionalities:</AccessoriesTitle>
          <Accessories>
            {accessories[0]}&ensp;|&ensp;{accessories[1]}&ensp;|&ensp;
            {functionalities[0]}
            &ensp;|&ensp;{accessories[2]}&ensp;|&ensp;{functionalities[1]}
            &ensp;|&ensp;{functionalities[2]}
          </Accessories>

          <ConditionsTitle>Rental Conditions: </ConditionsTitle>
          <ConditionsList>
            <Items>
              Minimum age :{' '}
              <ItemsSpan>
                {rentalConditions.split('\n')[0].split(':')[1]}
              </ItemsSpan>
            </Items>
            <Items>{rentalConditions.split('\n')[1]}</Items>
            <Items>{rentalConditions.split('\n')[2]}</Items>
            <Items>
              Mileage : <ItemsSpan>{mileage.toLocaleString('en')}</ItemsSpan>
            </Items>
            <Items>
              Price : <ItemsSpan>{rentalPrice}</ItemsSpan>
            </Items>
          </ConditionsList>

          <Button href="tel:+380730000000">Rental car</Button>
        </ModalContainer>
      </Modal>
    </BackDrop>
  );
};