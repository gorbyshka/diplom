import { FC } from "react";
import { CardTop } from "./cardTop";

import {
    TopGalleriesBlock,
    ContainerGalleries,
    GalleriesName,
    Name,
    GalleriesCard,
    GalleriesBtn,
    GalleriesBtnLink,
    Span
} from "./topGalleriesStyle.style";

import { cardData } from "./cardData";

export const TopGalleries: FC = () => {
    return (
        <TopGalleriesBlock>

            <ContainerGalleries>

                <GalleriesName>

                    <Name>
                        Top Galleries
                    </Name>

                </GalleriesName>

                <GalleriesCard>

                    {cardData.map((card, index) => (

                        <CardTop
                         key={index} 
                         text={card.text} 
                         photos={card.photos}
                          />

                    ))}

                </GalleriesCard>

                <GalleriesBtn>

                    <GalleriesBtnLink href="#">

                        <Span>
                            See All
                        </Span>

                    </GalleriesBtnLink>

                </GalleriesBtn>

            </ContainerGalleries>

        </TopGalleriesBlock>
    );
};
