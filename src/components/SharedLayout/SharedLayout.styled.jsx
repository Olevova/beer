import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
  background-color: white;
  z-index: 10;
`;

export const Header = styled.header`
  position: fixed;
  margin: auto;
  max-width: 1440px;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #09b3f0;
  z-index: 100;

  > nav {
    display: flex;
  }

  .delbutton {
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    background-color: #09b3f0;
    font-weight: 500;
    margin-right: 10px;
    color: white;
  }
`;

export const Logo = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: x-large;
  margin: 0;
  align-items: center;
  color: #09b3f0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #09b3f0;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #09b3f0;
  }
`;
