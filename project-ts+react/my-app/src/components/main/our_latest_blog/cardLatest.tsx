import { FC } from "react";
import { Image } from "../buyandsell/image";
import { CardLatestProps } from "../../../types/mainTypes/CardLatestProps";

import {
    CardWrapper,
    LatestImg,
    Img,
    LatestAdmin,
    LatestText,
    LatestItems,
    LatestIcons,
    LinkLatest,
    P,
    Small,
    LineBreak
} from "./ourLatestStyle.style";

export const CardLatest: FC<CardLatestProps> = (props) => {
    const { Src, Alt, Text } = props;

    return (
        <CardWrapper>

            <LatestImg>

                <Img src={Src} alt={Alt} />

            </LatestImg>

            <LatestAdmin>

                <Image Src={require('./icons/admin.svg').default} Alt={'Admin'} />

                <Small>
                    12 May 2022
                </Small>

            </LatestAdmin>

            <LatestText>

                <P>
                    {Text}
                </P>

                <Small>
                    Lorem ipsum dolor sit amet, consectetur adipiscing <LineBreak />
                    elit amet. Lorem ipsum dolor sit amet.
                </Small>

            </LatestText>

            <LatestItems>

                <LinkLatest>

                    Read More

                </LinkLatest>

                <LatestIcons>

                    <Image Src={require('./icons/message.svg').default} Alt={'Message'} />
                    <Image Src={require('./icons/settings.svg').default} Alt={'Settings'} />

                </LatestIcons>

            </LatestItems>

        </CardWrapper>
    )
}