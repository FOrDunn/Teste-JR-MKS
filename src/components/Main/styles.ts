import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: #f9f9f9;

  padding: 16px 0 32px;
`;

export const ProductsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  max-width: 950px;
  width: 80vw;

  background-color: #f9f9f9;

  column-gap: 20px;
  row-gap: 30px;
`;
