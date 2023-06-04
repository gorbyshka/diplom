import styled from "styled-components";
import { CSSTransition } from 'react-transition-group';

export const WeatherContainer = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  height: 100px;
  margin-top: 20px;
  background: linear-gradient(
    101.9deg,
    rgba(201, 34, 227, 0.4) 7.67%,
    rgba(153, 30, 234, 0.4) 52.66%,
    rgba(73, 23, 246, 0.4) 93.7%
  );
`;

export const WeatherHeader = styled.div`
  display: flex;
`;

export const WeatherMain = styled.div`
  flex: 1 1 auto;
`;

export const WeatherCity = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  color: white;
`;

export const WeatherStatus = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: -10px;
  color: white;
`;

export const WeatherIcon = styled.div`
  position: relative;
  float: right;
  top: -100px;
`;

export const WeatherTemp = styled.div`
  font-size: 20px;
  margin-top: -10px;
  color: white;

  &::after {
    display: block;
    margin-left: 22px;
    margin-top: -25px;
    content: "°C";
  }
`;

export const Img = styled.img``;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 100px;
  margin-top: 150px;

  @media (max-width: 768px) {
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px;
    margin-top: 150px;
    margin-left: 260px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;

  @media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 40px;

    }
  
`;

export const FooterLink = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 280px;

  @media (max-width: 768px) {
    
    display: flex;
    flex-direction: column;
    margin: 0;
    margin-bottom: 30px;
    
    }
`;

export const FooterLinkHeader = styled.h4`
  font-size: 24px;
  color: white;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 20px;
`;

export const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 18px;

 li:not(:first-child) {
    margin-top: 20px;

  }
`;

export const FooterListLink = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterSocialHeader = styled.h4`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FooterSocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const FooterSocialItem = styled.li`
  margin-right: 20px;
`;

export const FooterSocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const LinkFooter = styled.a``;

export const Li = styled.li``;

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
