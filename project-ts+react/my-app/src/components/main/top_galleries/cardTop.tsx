import { FC } from "react";
import {
    Card,
    CardPhotos,
    CardPhotoLeft,
    CardPhotosRight,
    CardPhotoRight,
    CardItem,
    CardText,
    CardTextParagraph,
    CardTextSmall,
    CardArrow,
} from "./topGalleriesStyle.style";

import { Image } from "../buyandsell/image";
import { CardTopProps } from "../../../types/mainTypes/CardTopProps";

export const CardTop: FC<CardTopProps> = (props) => {
    const { photos, text } = props;

    return (
        <Card>

            <CardPhotos>

                <CardPhotoLeft
                    src={photos[0]}
                    alt="product photo"
                />

                <CardPhotosRight>

                    {photos.slice(1).map((photo, index) => (

                        <CardPhotoRight
                            key={index}
                            src={photo}
                            alt="product photo"
                        />

                    ))}

                </CardPhotosRight>

            </CardPhotos>

            <CardItem>

                <CardText>

                    <CardTextParagraph>
                        {text}
                    </CardTextParagraph>

                    <CardTextSmall>
                        Gallery
                    </CardTextSmall>

                </CardText>

                <CardArrow>

                    <Image
                        Src={require("./icons/Arrow-right.svg").default}
                        Alt={"ArrowRight"}
                    />

                </CardArrow>

            </CardItem>

        </Card>
    );
};
