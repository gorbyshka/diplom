import { FC } from "react";
import { CardSellerProps } from "../../../types/mainTypes/CardSellerProps";

import {
    CardSellerContainer,
    CardSellerImage,
    CardSellerText,
    CardSellerParagraph,
    CardSellerSmall
} from "./topSellerStyle.style";

export const CardSeller: FC<CardSellerProps> = ({ Src, Alt, Text }) => {
    return (
        <CardSellerContainer>

            <CardSellerImage
                src={Src}
                alt={Alt}
            />

            <CardSellerText>

                <CardSellerParagraph>
                    {Text}
                </CardSellerParagraph>

                <CardSellerSmall>
                    40 Artworks
                </CardSellerSmall>

            </CardSellerText>

        </CardSellerContainer>
    );
};