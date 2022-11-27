import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: #0f52ba;
  padding: 30px 65px;

  @media screen and (max-width: 500px) {
    padding: 10px 24px;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: baseline;
  color: #ffffff;

  @media screen and (max-width: 500px) {
    align-items: flex-end;
  }
`;
export const TitleBig = styled.h1`
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  padding-right: 10px;

  @media screen and (max-width: 500px) {
    font-size: 32px;
    line-height: 26px;
  }
`;
export const TitleSmall = styled.h2`
  font-weight: 300;
  font-size: 20px;
  line-height: 20px;
  @media screen and (max-width: 500px) {
    font-size: 16px;
    line-height: 19px;
  }
`;
