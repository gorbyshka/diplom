import { Link } from 'react-router-dom';

import styled, { 
  css, 
  keyframes 
} from "styled-components";

import { CSSTransition } from 'react-transition-group';

export const HeaderWrapper = styled.header<{ scrolled: boolean }>`
  width: 100%;
  color: white;
  margin-top: 25px;
  z-index: 1000;

  ${({ scrolled }) =>
    scrolled &&
    css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #211538;
      box-shadow: 0 2px 5px rgba(108, 0, 135, 0.2);
      margin-top: -1px;
    `}
`;

export const HeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 100px;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const NameLogo = styled.h1`
  margin-left: 10px;
  font-size: 24px;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavList = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 768px) {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    margin: 0;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    background-color: #6a1fb1;

    ${({ isOpen }) =>
      isOpen &&
      css`
        transform: translateY(0%);
        z-index: 5;
      `}

    li {
      margin: 20px 0;
    }
  }
`;

export const ListItem = styled.li`
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavLinkLink = styled(Link) <{ active: number }>`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: #666;
  }

  ${({ active }) =>
    active &&
    css`
      color: #666;
    `}
`;

export const BurgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 20px;
    cursor: url('../../cursor/cursor-arm.png');

    & > div {
      width: 100%;
      height: 2px;
      background-color: white;
      transition: all 0.3s ease-in-out;
    }

    ${({ isOpen }) =>
    isOpen &&
    css`
        & > div:first-child {
          transform: translateY(7px) rotate(45deg);
        }

        & > div:last-child {
          transform: translateY(-7px) rotate(-45deg);
        }

        & > div:nth-child(2) {
          transform: scaleX(0);
        }
      `}
  }
`;

export const Line = styled.div`
        width: 20px;
        height: 2px;
        background-color: #ffffff;
        margin: 3px auto;
        transition: all 0.3s ease-in-out;
        z-index: 1000;
`;

export const HeaderBtnWrapper = styled.div``;

export const UserIcon = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 20px;
  background-color: #8c1eff;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: white;
  font-weight: bold;
  padding: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  img {
      margin-right: 8px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
`;

export const UserName = styled.div`
  margin-bottom: 3px;
  margin-right: 50px;
`;

export const Balance = styled.span`
  white-space: nowrap;
  margin-right: 15px;
  font-size: 14px;
  color: #11d45c;
`;

export const SignUpButton = styled.a`
   width: 115px;
   height: 60px;
   background: linear-gradient(101.9deg, rgba(201, 34, 227, 0.4) 7.67%, rgba(153, 30, 234, 0.4) 52.66%, rgba(73, 23, 246, 0.4) 93.7%);
   border-radius: 4px;
   color: white;
   text-decoration: none;
   padding: 12px 24px;
   gap: 10px;

   @media only screen and (max-width: 768px) {
    width: 90px;
    height: 40px;
    padding: 8px 16px;
    gap: 5px;
    margin-left: 10px;
   }
`;

export const LoginButton = styled.a`
    width: 41px;
    height: 22px;
    background-color: inherit;
    color: white;
    margin-right: 24px;
    order: 0;
    text-decoration: none;

    @media only screen and (max-width: 768px) {
      width: 30px;
      height: 18px;
      margin-right: 10px;
     }
`;

const slideInTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOutTop = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  overflow: hidden;
`;

export const PopupInner = styled.div`
  background-color: #3e365c;
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  position: relative;
 `;

export const PopupTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const PopupCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  cursor: url('../../cursor/cursor-arm.png');
  border: none;
  background: transparent;
  outline: none;
`;

export const PopupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PopupInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #7b699b;
  color: #fff;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;
  outline: none;
`;

export const PopupLabel = styled.label`
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
`;

export const PopupButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #ab96cc;
  color: #fff;
  margin-top: 20px;
  margin-left: 15px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
`;

export const WrapperLogo = styled.img``;

export const StyledCSSTransition = styled(CSSTransition)`
&.fade-enter {
  opacity: 0;
}

&.fade-enter-active {
  opacity: 1;
  transition: opacity 1000ms ease-in;
  transition-delay: 250ms;
}

&.fade-exit {
  opacity: 0;
  transform: translateX(-100%);
}

&.fade-exit-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
`;
