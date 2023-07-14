import styled from "styled-components";

export const OneBeer = styled.div`
  position: absolute;
  margin-top: 100px;
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  max-width: 1440px;
  img {
    height: 600px;
    margin-right: 100px;
    &:hover {
      scale: 1.02;
      transition: all 300ms;
    }
  }
  span {
    font-weight: 600;
    margin-bottom: 10px;
  }
`;
