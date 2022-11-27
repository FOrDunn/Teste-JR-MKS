import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
from{opacity: 1}to{opacity: 0.5}`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 218px;
  height: 280px;

  border-radius: 8px;

  background-color: #ffffff;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);

  animation: ${loadingAnimation} 1s ease-in-out infinite alternate;
`;

export const CardBody = styled.div`
  color: #2c2c2c;
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #ffffff;

  height: calc(100% - 30px);

  border-radius: 8px 8px 0 0;

  padding: 15px 15px 0;
`;

export const ProductInfoDiv = styled.div`
  display: flex;
  align-items: center;

  padding-top: 15px;
  gap: 10px;
  width: 100%;
`;

export const ProductName = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: #808080;

  @media screen and (max-width: 500px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;
export const ProductDescription = styled.p`
  font-weight: 300;
  font-size: 10px;
  line-height: 12px;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: #696969;
  margin: 10px 0;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const InfoPriceDiv = styled.div``;
export const ProductPrice = styled.h3`
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
`;

export const CardFooter = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  background-color: #c0c0c0;

  height: 32px;
  width: 100%;

  border-radius: 0 0 8px 8px;

  transition-duration: 0.5s;
`;

export const LoadingImage = styled.div`
  height: 150px;
  width: 100%;
  background-color: #a9a9a9;
  border-radius: 5px;
`;
