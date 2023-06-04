import {
    FC,
    useEffect,
    useRef,
    useState
} from 'react';

import { BuyAndSell } from "./buyandsell";
import { LearnHistory } from './learn_history';
import { CreateAndSell } from './createandsell';
import { TopGalleries } from './top_galleries';
import { TopSeller } from './top_seller';
import { OurLatestBlog } from './our_latest_blog';
import { StyledCSSTransition } from './mainStyle.style';

export const Main: FC = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);

    }, []);

    const transitionRef = useRef(null);

    return (
        <StyledCSSTransition
            in={show}
            timeout={1000}
            classNames="fade"
            unmountOnExit
            nodeRef={transitionRef}
        >

            <>

                <BuyAndSell />
                <LearnHistory />
                <CreateAndSell />
                <TopGalleries />
                <TopSeller />
                <OurLatestBlog />

            </>

        </StyledCSSTransition>

    )
}