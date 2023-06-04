import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MarketContainer, NftContainer, NftImage, NftName } from '../market/marketStyle.style';
import { NftProp } from '../../types/marketTypes/NftProp';

export const Collection: React.FC = () => {
  const location = useLocation();
  const selectedNft = location.state?.selectedNft;
  const purchasedNftsFromMarket = location.state?.purchasedNfts;
  const [collection, setCollection] = useState<NftProp[]>([]);

  useEffect(() => {
    setCollection(purchasedNftsFromMarket || []);
  }, [purchasedNftsFromMarket]);


  const addToCollection = (nft: NftProp) => {
    setCollection([nft]);
  };

  useEffect(() => {
    if (selectedNft) {
      addToCollection(selectedNft);
    }
  }, [selectedNft]);

  return (
    <MarketContainer>
      {collection.length > 0 && (
        <NftContainer key={`collection-${collection[0].name}`}>
          <NftImage src={`https://gateway.pinata.cloud/ipfs/${collection[0]?.image?.replace('ipfs://', '')}`} alt="" />
          <NftName>{collection[0].name}</NftName>
        </NftContainer>
      )}
    </MarketContainer>
  );
};
