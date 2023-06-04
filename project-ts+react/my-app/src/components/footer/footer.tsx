import {
    FC,
    useEffect,
    useState,
    useRef
} from "react";

import { Weather } from "./weather";

import {
    FooterContainer,
    FooterLinks,
    FooterSocial,
    FooterSocialHeader,
    FooterSocialList,
    FooterSocialItem,
    FooterSocialIcon,
    FooterLink,
    FooterLinkHeader,
    FooterList,
    FooterListLink,
    LinkFooter,
    Li,
    StyledCSSTransition
} from "./footerStyle.style";

export const Footer: FC = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

    }, []);

    const transitionRef = useRef(null);

    return (
        <>
            <StyledCSSTransition
                in={show}
                timeout={1000}
                classNames="fade"
                unmountOnExit
                nodeRef={transitionRef}
            >
                
                <FooterContainer>

                    <FooterLinks>

                        <FooterSocial>

                            <FooterSocialHeader>
                                Newsletter
                            </FooterSocialHeader>

                            <FooterSocialList>

                                <FooterSocialItem>

                                    <LinkFooter href="#">

                                        <FooterSocialIcon
                                            src={require('./icons/inst.svg').default}
                                            alt="Instagram"
                                        />

                                    </LinkFooter>

                                </FooterSocialItem>

                                <FooterSocialItem>

                                    <LinkFooter>

                                        <FooterSocialIcon
                                            src={require('./icons/facebook.svg').default}
                                            alt="Facebook"
                                        />

                                    </LinkFooter>

                                </FooterSocialItem>

                                <FooterSocialItem>

                                    <LinkFooter>

                                        <FooterSocialIcon
                                            src={require('./icons/twitter.svg').default}
                                            alt="Twitter"
                                        />

                                    </LinkFooter>

                                </FooterSocialItem>

                            </FooterSocialList>

                        </FooterSocial>

                        <FooterLink>

                            <FooterLinkHeader>
                                Marketplace
                            </FooterLinkHeader>

                            <FooterList>

                                <Li>

                                    <FooterListLink href="#">
                                        All NFTs
                                    </FooterListLink>

                                </Li>

                                <Li>

                                    <FooterListLink href="#" >
                                        Art
                                    </FooterListLink>

                                </Li>

                                <Li>

                                    <FooterListLink href="#" >
                                        Music
                                    </FooterListLink>

                                </Li>

                                <Li>

                                    <FooterListLink href="#" >
                                        Domain Names
                                    </FooterListLink>

                                </Li>

                            </FooterList>

                        </FooterLink>

                        <FooterLink>

                            <FooterLinkHeader>
                                Resources
                            </FooterLinkHeader>

                            <FooterList>

                                <Li>

                                    <FooterListLink href="#">
                                        Home
                                    </FooterListLink>

                                </Li>

                                <Li>

                                    <FooterListLink href="#">
                                        Partners
                                    </FooterListLink>

                                </Li>

                                <Li>

                                    <FooterListLink href="#">
                                        Suggestions
                                    </FooterListLink>

                                </Li>

                                <Li>

                                    <FooterListLink href="#">
                                        Discord
                                    </FooterListLink>

                                </Li>

                            </FooterList>

                        </FooterLink>

                        <FooterLink>

                            <FooterLinkHeader>
                                Join Our Newsletter
                            </FooterLinkHeader>

                            <Weather />

                        </FooterLink>

                    </FooterLinks>

                </FooterContainer>

            </StyledCSSTransition>

        </>
    );
};
