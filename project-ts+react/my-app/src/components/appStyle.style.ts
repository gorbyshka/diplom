import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url('../fonts/OpenSans-VariableFont_wdth,wght.ttf');
  }

  body {
    font-family: 'Open Sans', sans-serif;
    background: #211538;
  }

  a,
  button {
    cursor: pointer;
  }
`;

export const AppContainer = styled.div`
  .buttons-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 0px;
    z-index: 999;
  }

  .scroll-button {
    background-color: transparent;
    border: none;
  }
`;

export const ScrollbarStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    background-color: #f5f5f5;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #481a6c;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #000;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 15px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #300b5f;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(74, 15, 104);
    -webkit-animation: scrollbar-thumb-animation 1s ease-in-out infinite alternate;
    animation: scrollbar-thumb-animation 1s ease-in-out infinite alternate;
  }

  @-webkit-keyframes scrollbar-thumb-animation {
    from {
      height: 50px;
      width: 50px;
    }

    to {
      height: 30px;
      width: 30px;
    }
  }

  @keyframes scrollbar-thumb-animation {
    from {
      height: 50px;
      width: 50px;
    }

    to {
      height: 30px;
      width: 30px;
    }
  }
`;

export const NavList = styled.ul`
  li a.active {
    color: #666;
  }
`;

export const ScrollBtn = styled.button`
  background-color: transparent;
  border: none;
  `;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 50px;
  right: 0px;
  z-index: 999;
`;
