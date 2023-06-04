import { FC } from "react";
import { MainBtn } from "../buyandsell/mainBtn";
import { Image } from "../buyandsell/image";

import {
    BlockHistory,
    BlockText,
    SmallBlock,
    BlockMainItems,
    BlockMainBtn,
    BlockMainArrow,
    BlockImg,
    Images,
    ImgPearson1,
    ImgSubsBlock,
    Subs,
    ImgPearson,
    Pearson2Text,
    Pearson2Views,
    Pearson3Text,
    Pearson3Views,
    ImgPearson4,
    ArrowImage,
    Text,
    Span,
    LineBreak
} from "./learnHistoryStyle.style";

export const LearnHistory: FC = () => {
    return (
        <BlockHistory>

            <BlockText>

                <Text>
                    Learn History
                </Text>

                <SmallBlock>

                    Lorem ipsum dolor sit amet, consectet <LineBreak /> adipisc elit amet.

                </SmallBlock>

                <BlockMainItems>

                    <BlockMainBtn>

                        <MainBtn text={'See More'} />

                    </BlockMainBtn>

                    <BlockMainArrow>

                        <ArrowImage
                            Src={require('./icons/Arrow 8.svg').default}
                            Alt={'Arrow'}
                        />

                    </BlockMainArrow>

                </BlockMainItems>

            </BlockText>

            <BlockImg>

                <Images>

                    <ImgPearson1>

                        <Image
                            Src={require('./img/stoneFace1.png')}
                            Alt={"Pearson1"}
                        />

                        <ImgSubsBlock>

                            <Subs>

                                <Image
                                    Src={require('./icons/Subs.svg').default}
                                    Alt={"Subs"}
                                />

                            </Subs>

                        </ImgSubsBlock>

                    </ImgPearson1>

                    <ImgPearson>

                        <Image
                            Src={require('./img/stoneFace2.png')}
                            Alt={"Pearson2"}
                        />

                        <Pearson2Text>

                            <Image
                                Src={require('./icons/Eyes.svg').default}
                                Alt={'Eyes'}
                            />

                            <Pearson2Views>

                                <Span>
                                    17,512 Views
                                </Span>

                            </Pearson2Views>

                        </Pearson2Text>

                    </ImgPearson>

                    <ImgPearson>

                        <Image
                            Src={require('./img/stoneFace3.png')}
                            Alt={"Pearson3"}
                        />

                        <Pearson3Text>

                            <Image
                                Src={require('./icons/Eyes.svg').default}
                                Alt={'Eyes'}
                            />

                            <Pearson3Views>

                                <Span>
                                    17,512 Views
                                </Span>

                            </Pearson3Views>

                        </Pearson3Text>

                    </ImgPearson>

                    <ImgPearson4>

                        <Image
                            Src={require('./img/stoneFace4.png')}
                            Alt={"Pearson4"}
                        />

                    </ImgPearson4>

                </Images>

            </BlockImg>

        </BlockHistory>
    );
}
