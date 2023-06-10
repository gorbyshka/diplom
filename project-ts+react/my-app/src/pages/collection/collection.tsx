import React, {
  useEffect,
  useState
} from 'react';

import { useLocation } from 'react-router-dom';

import {
  MarketContainer,
  NftContainer,
  NftImage,
  NftName
} from '../market/marketStyle.style';

import { NftProp } from '../../types/marketTypes/NftProp';

export const Collection: React.FC = () => {
  const location = useLocation();
  const selectedNft = location.state?.selectedNft;

  const [collection, setCollection] = useState<NftProp[]>([]);

  const addToCollection = (nft: NftProp) => {
    setCollection(prevCollection => {
      const newCollection = [...prevCollection, nft];
      saveDataToSessionStorage(newCollection);
      return newCollection;
    });
  };

  const saveDataToSessionStorage = (data: NftProp[]) => {
    sessionStorage.setItem('collection', JSON.stringify(data));
  };

  useEffect(() => {
    const savedCollection = sessionStorage.getItem('collection');
    const initialCollection = savedCollection ? JSON.parse(savedCollection) : [];
    setCollection(initialCollection);
  }, []);

  useEffect(() => {
    if (selectedNft) {
      addToCollection(selectedNft);
    }
  }, [selectedNft]);

  return (
    <MarketContainer>

      {collection.length > 0 &&

        collection.map((nft, index) => (

          <NftContainer key={`collection-${index}`}>

            <NftImage
              src={`https://gateway.pinata.cloud/ipfs/${nft.image?.replace('ipfs://', '')}`}
              alt={`collection-${index}`}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const monkey: string = require('./img/nft-monkey.jpg');
                e.currentTarget.src = monkey;
              }}
            />

            <NftName>
              {nft.name}
            </NftName>

          </NftContainer>

        ))}

    </MarketContainer>
  );
};
