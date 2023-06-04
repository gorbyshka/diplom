import { FC } from "react";
import { CardLatest } from "./cardLatest";

import {
    OurLatestBlogContainer,
    LatestBlock,
    LatestName,
    LatestCards,
    Text
} from "./ourLatestStyle.style";

import { latestCard } from "./latestCard";

export const OurLatestBlog: FC = () => {
    return (
        <OurLatestBlogContainer>

            <LatestBlock>

                <LatestName>

                    <Text>
                        Our Latest Blog
                    </Text>

                </LatestName>

                <LatestCards>

                    {latestCard.map((card, index) => (

                        <CardLatest
                            key={index}
                            Src={card.src}
                            Alt={card.alt}
                            Text={card.text}
                        />

                    ))}

                </LatestCards>

            </LatestBlock>

        </OurLatestBlogContainer>
    )
}