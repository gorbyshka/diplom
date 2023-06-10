import {
  FC,
  useEffect,
  useState,
  useRef
} from 'react';

import { HeadBtn } from './headBtn';
import { Logo } from './logo';
import { navLinks } from '../../routes/routing';
import { SignUp } from './signUp';
import { NavLink } from './navLink';
import { Image } from '../main/buyandsell/image';

import {
  HeaderWrapper,
  HeaderItems,
  HeaderLogo,
  NameLogo,
  HeaderNav,
  NavList,
  BurgerMenu,
  Line,
  HeaderBtnWrapper,
  UserIcon,
  UserInfo,
  UserName,
  Balance,
  StyledCSSTransition
} from './styleHeader.style';

import { actionBtns } from './actionBtns';
import { HeaderProps } from '../../types/headerTypes/HeaderProps';

export const Header: FC<HeaderProps> = ({ initialBalance, handleUpdateBalance }) => {
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [headerBalance, setHeaderBalance] = useState<number>(Number(initialBalance) || 0);

  useEffect(() => {
    setHeaderBalance(Number(initialBalance));
  }, [initialBalance]);

  const transitionRef = useRef(null);

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleBurgerClick = () => setIsOpen((prevState) => !prevState);

  const handleRegisterClick = () => setShowPopup(true);

  const handlePopupClose = () => setShowPopup(false);

  const handleRegistration = (name: string) => {
    setUsername(name);
    setShowPopup(false);
  };

  const formatBalance = (balance: string | null) => {
    if (balance !== null) {
      const formattedBalance = parseFloat(balance).toFixed();
      return formattedBalance;
    }
    return '';
  };

  return (
    <>
      <StyledCSSTransition
        in={show}
        timeout={1000}
        classNames="fade"
        unmountOnExit
        nodeRef={transitionRef}
      >

        <HeaderWrapper
          scrolled={scrolled}
          className={`header ${scrolled ? 'scrolled' : ''}`}
          ref={transitionRef}
        >

          <HeaderItems>

            <HeaderLogo>

              <Logo
                image={require('./img/nft.png')}
                id="logo" />

              <NameLogo>
                NFTs
              </NameLogo>

            </HeaderLogo>

            <HeaderNav>

              <BurgerMenu
                isOpen={isOpen}
                className={`burger-menu ${isOpen ? 'open' : ''}`}
                onClick={handleBurgerClick}
              >
                <Line />
                <Line />
                <Line />

              </BurgerMenu>

              <NavList
                isOpen={isOpen}
                className={`nav-list ${isOpen ? 'open' : ''}`}
              >

                {navLinks.map((link, index) => (

                  <NavLink
                    key={index}
                    path={link.path}
                    title={link.title}
                  />

                ))}

              </NavList>

            </HeaderNav>

            <HeaderBtnWrapper>

              {username && (

                <UserIcon>

                  <Image
                    Src={require('./icons/user-logo.svg').default}
                    Alt={'user-logo'}
                  />

                  <UserInfo>

                    <UserName>
                      {username}
                    </UserName>

                    <Balance>
                      Баланс: {formatBalance(initialBalance)} {' '} ETH
                    </Balance>

                  </UserInfo>

                </UserIcon>

              )}

              {!username &&

                actionBtns.map((btn) => (

                  <HeadBtn
                    key={btn.id}
                    nameBtn={btn.name}
                    title={btn.title}
                    id={btn.id}
                    onClick={btn.id === 2 ? handleRegisterClick : undefined}
                  />

                ))}

            </HeaderBtnWrapper>

          </HeaderItems>

        </HeaderWrapper>

      </StyledCSSTransition>

      {showPopup && (

        <SignUp
          Click={handlePopupClose}
          onRegistration={handleRegistration}
        />

      )}

    </>
  );
};
