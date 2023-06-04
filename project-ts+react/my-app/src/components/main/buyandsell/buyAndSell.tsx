import { Image } from "./image";
import { MainBtn } from "./mainBtn";

import {
    BuySell,
    Container,
    ContainerText,
    ContainerNameBuy,
    Nft,
    Small,
    ContainerBtns,
    ExploreBtn,
    PlayItems,
    Play,
    PlayBtn,
    BlockCounter,
    CountUsers,
    CountUserText,
    BlockCategory,
    CategoryText,
    ContainerImg,
    Cat,
    FaceOne,
    Cube,
    Skeleton,
    FaceTwo,
    Artist,
    Artworks,
    LineBreak
} from "./buyAndSellStyle.style";

export const BuyAndSell: React.FC = () => {
    return (
        <BuySell>

            <Container>

                <ContainerText>

                    <ContainerNameBuy>

                        Buy and Sell <LineBreak />
                        Digital Art, <LineBreak />
                        <Nft>
                            NFT
                        </Nft> Collection

                    </ContainerNameBuy>

                    <Small>

                        Lorem ipsum dolor sit amet,
                        consectetur adipisc elit amet. <LineBreak />
                        Consectetu at it lrorem ipsum dolor sit amet.

                    </Small>

                    <ContainerBtns>

                        <ExploreBtn>

                            <MainBtn text={"Explore"} />

                        </ExploreBtn>

                        <PlayItems>

                            <Play>

                                <Image
                                    Src={require("./icons/play2.svg").default}
                                    Alt={"PLay"}
                                />

                            </Play>

                        </PlayItems>

                        <PlayBtn>

                            <MainBtn text={"Watch Video"} />

                        </PlayBtn>

                    </ContainerBtns>

                    <BlockCounter>

                        <CountUsers>

                            <CountUserText>
                                80K+
                            </CountUserText>

                            <CountUserText>
                                27K+
                            </CountUserText>

                            <CountUserText>
                                3.5K+
                            </CountUserText>

                        </CountUsers>

                        <BlockCategory>

                            <CategoryText className="active-user">
                                Active user
                            </CategoryText>

                            <Artworks className="artworks">
                                Artworks
                            </Artworks>

                            <Artist className="artist">
                                Artists
                            </Artist>

                        </BlockCategory>

                    </BlockCounter>

                </ContainerText>

                <ContainerImg>

                    <Cat>

                        <Image Src={require("./img/cat.png")} Alt={"Cat"} />

                    </Cat>

                    <FaceOne>

                        <Image Src={require("./img/face1.png")} Alt={"FaceOne"} />

                    </FaceOne>

                    <Cube>

                        <Image Src={require("./img/cube.png")} Alt={"Cube"} />

                    </Cube>

                    <Skeleton>

                        <Image Src={require("./img/skeleton.png")} Alt={"Skeleton"} />

                    </Skeleton>

                    <FaceTwo>

                        <Image
                            Src={require("./img/face2.png")}
                            Alt={"FaceTwo"}
                        />

                    </FaceTwo>

                </ContainerImg>

            </Container>

        </BuySell>
    )
}
