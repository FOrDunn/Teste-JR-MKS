import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 500px;
  max-height: 100vh;
  height: 100%;

  position: fixed;
  top: 0px;
  right: 0px;

  background-color: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: all 1s;
  &[data-is-open="true"] {
    transform: translateX(0);
  }

  transform: translateX(100%);

  @media screen and (max-width: 500px) {
    width: 320px;
    max-height: 100vh;
    height: 100%;
  }
`;

export const CartHeader = styled.div`
  color: #ffffff;
  display: flex;
  margin-bottom: 24px;

  justify-content: space-between;
  width: 100%;

  position: relative;

  &:after {
    pointer-events: none;
    position: absolute;
    content: " ";

    width: 100%;
    height: 56px;

    bottom: 0;
    left: 0;

    transform: translateY(72px);
    z-index: 999;
    background: linear-gradient(#0f52ba, transparent);
  }
`;
export const CloseButton = styled.button`
  background-color: #000000;
  width: 30px;
  height: 30px;
  border-radius: 19px;

  display: grid;
  place-items: center;
  border: none;
  transition: 0.5s;
  svg {
    color: #ffffff;
    width: 20px;
    height: 20px;
  }

  @media screen and (max-width: 500px) {
    width: 44px;
    height: 44px;
    border-radius: 22px;
    svg {
      width: 32px;
      height: 32px;
    }
  }

  :hover {
    background-color: #ffffff;
    cursor: pointer;

    svg {
      color: #000000;
    }
  }
`;
export const CartTitle = styled.h3`
  width: 166px;

  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
`;

export const CartBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: stretch;
  align-items: center;
  box-sizing: border-box;

  padding: 40px 64px 0 48px;
  width: 100%;

  max-height: calc(100vh - 100px);

  @media screen and (max-width: 500px) {
    max-height: calc(100vh - 65px);

    padding: 28px 16px 28px 32px;
  }
`;

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;

  padding: 8px 16px 4px 0;
  overflow-y: auto;
`;

export const ItemsListContainer = styled.div`
  width: 100%;
  overflow: auto;
  flex: 1;
`;

export const CartItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  background-color: #ffffff;

  width: 100%;
  height: 95px;

  border-radius: 8px;
  @media screen and (max-width: 500px) {
    height: 220px;
    flex-direction: column;

    img {
      height: 96px;
      width: 88px;
    }
  }

  svg {
    color: #ffffff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(+50%, -50%);

    z-index: 5;

    border-radius: 10px;
    width: 16px;
    height: 16px;
    padding: 4px;
    background-color: #000000;

    @media screen and (max-width: 500px) {
      background-color: transparent;
      color: #000000;
      transform: translate(-10%, +10%);
      width: 40px;
      height: 40px;
    }
  }

  :hover {
    cursor: pointer;
  }
`;
export const ItemName = styled.p`
  width: 130px;

  font-weight: 400;
  font-size: 13px;
  line-height: 17px;

  padding: 0 20px 0;

  @media screen and (max-width: 500px) {
    width: auto;
    padding: 12px 0;

    font-size: 16px;
    line-height: 19px;
  }
`;

export const ItemPrice = styled.p`
  margin-left: 40px;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  @media screen and (max-width: 500px) {
    height: 28px;
    min-width: 72px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #373737;

    color: #ffffff;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;

    border-radius: 5px;
  }
`;

export const ItemQuantityDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityTitle = styled.p`
  font-weight: 400;
  font-size: 5px;
  line-height: 6px;

  padding-bottom: 4px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const QuantityButtons = styled.div`
  height: 19px;

  align-items: center;
  display: flex;
  border: 0.5px solid #bfbfbf;
  border-radius: 4px;

  @media screen and (max-width: 500px) {
    height: 32px;
  }
`;

export const IncreaseQuantityButton = styled.button`
  width: 17px;
  border: 0;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px 0 0 4px;

  @media screen and (max-width: 500px) {
    width: 32px;
    font-size: 24px;
    line-height: 29px;
  }
  :hover {
    cursor: pointer;
  }
`;
export const QuantityValue = styled.p`
  display: flex;
  justify-content: center;
  width: 16px;
  padding: 0 4px;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;

  @media screen and (max-width: 500px) {
    width: 32px;
    font-size: 20px;
    line-height: 24px;
  }
`;
export const DecreaseQuantityButton = styled.button`
  width: 17px;
  border: 0;

  background-color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 4px 4px 0;

  @media screen and (max-width: 500px) {
    width: 34px;
    font-size: 24px;
    line-height: 29px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const HR = styled.hr`
  margin: 0;
  border: 0;
  width: 0.5px;
  height: 11.5px;
  background-color: #bfbfbf;

  @media screen and (max-width: 500px) {
    height: 24px;
  }
`;

export const CartFooter = styled.button`
  height: 100px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  background: #000000;

  transition: background 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #2ec662;
    border: none;
  }
  @media screen and (max-width: 500px) {
    height: 65px;
  }
`;
export const FinalPriceDiv = styled.div`
  margin: 16px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    margin: 16px 0 0;
  }
  p {
    color: #ffffff;
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
  }

  position: relative;

  &:after {
    pointer-events: none;
    position: absolute;
    content: " ";

    width: 100%;
    height: 56px;

    bottom: 0;
    left: 0;

    transform: translateY(-40px);

    z-index: 999;
    background: linear-gradient(transparent, #0f52ba);
  }
`;
export const FinalizeShoppingButton = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 28px;

  @media screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const PriceQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
