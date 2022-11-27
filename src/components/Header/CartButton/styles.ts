import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  display: flex;

  padding-left: 15px;
  gap: 12px;

  transition-duration: 0.4s;
  background-color: #ffffff;

  height: 45px;
  width: 90px;

  border-radius: 8px;
  border: none;

  @media screen and (max-width: 500px) {
    height: 26px;
    width: 52px;

    padding: 0 8px;

    svg {
      width: 12px;
    }
  }

  :hover {
    background-color: #000000;
    color: white;
    cursor: pointer;
  }
`;

export const ItemsCounter = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  @media screen and (max-width: 500px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
