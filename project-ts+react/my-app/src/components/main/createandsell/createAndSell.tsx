import { FC } from "react";
import { Image } from "../buyandsell/image";
import {
    BlockCreateAndSell,
    ContainerCreateAndSell,
    CreateAndSellName,
    CreateAndSellNameText,
    CardsCreateAndSell,
    Card,
    CardText,
    CardDescription,
    CardCollect,
    LineBreak
} from "./createAndSellStyle.style";

export const CreateAndSell: FC = () => {
    return (
        <BlockCreateAndSell>

            <ContainerCreateAndSell>

                <CreateAndSellName>

                    <CreateAndSellNameText>
                        Create And Sell Your NFTS
                    </CreateAndSellNameText>

                </CreateAndSellName>

                <CardsCreateAndSell>

                    <Card>

                        <Image
                         Src={require('./icons/wallet.svg').default}
                          Alt={'SetupWallet'} 
                          />

                        <CardText>
                            Set Up Your Wallet
                        </CardText>

                        <CardDescription>

                            Lorem ipsum dolor sit amet, consectet <LineBreak />
                            adipisc elit amet. Lorem ipsum dolor <LineBreak />
                            sit amet, consectet adipisc.

                        </CardDescription>

                    </Card>

                    <CardCollect>

                        <Image
                            Src={require('./icons/collection.svg').default}
                            Alt={'CreateCollection'}
                        />

                        <CardText>
                            Create Your Collection
                        </CardText>

                        <CardDescription>

                            Lorem ipsum dolor sit amet, consectet <LineBreak />
                            adipisc elit amet. Lorem ipsum dolor <LineBreak />
                            sit amet, consectet adipisc.

                        </CardDescription>

                    </CardCollect>

                    <Card>

                        <Image
                            Src={require('./icons/addNft.svg').default}
                            Alt={'AddNft'}
                        />

                        <CardText>
                            Add Your NFTs
                        </CardText>

                        <CardDescription>

                            Lorem ipsum dolor sit amet, consectet <LineBreak />
                            adipisc elit amet. Lorem ipsum dolor <LineBreak />
                            sit amet, consectet adipisc.

                        </CardDescription>

                    </Card>

                </CardsCreateAndSell>

            </ContainerCreateAndSell>

        </BlockCreateAndSell>
    );
}
