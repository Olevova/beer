import styled from "styled-components";

export const Beercontainer = styled.div`
  width: 1440px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  z-index: 5;
  :hover {
    background-color: #09b3f0;
    transition: all 250ms;
  }
  .item {
    border: 1px solid #09b3f0;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: var(--item-height);
    margin-bottom: 5px;
    img {
      height: 80%;
    }
    .description {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      max-width: 1320px;
    }
    .checkboxitem {
      margin-left: auto;
      padding: 10px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;
