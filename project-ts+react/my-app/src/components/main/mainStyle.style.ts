import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';

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
