import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Moralis from 'moralis';
import { NavLink } from 'react-router-dom';
import { Nft } from '../../types/marketTypes/Nft';

import {
  Loader,
  Spinner,
  MarketContainer,
  NftContainer,
  NftImage,
  NftImagePlaceholder,
  NftName,
  CollectButton,
  NftItems,
  Price,
  BuyButton,
  Owner,
  Money
} from './marketStyle.style';

import { NftProp } from '../../types/marketTypes/NftProp';

const getNfts = async (): Promise<Nft[]> => {
  await Moralis.start({
    apiKey: 'eUBaVuy1Rrei4sgjIOqRiyh3VYASD6YafEv8CHnhRI2p4YHwiQuSmF3XzvbAUOcf',
  });

  const options = {
    chain: '0x1',
    format: 'decimal' as const,
    tokenAddresses: [] as string[],
    address: '0xd8da6bf26964af9d7eed9e03e53415d37aa96045',
  };

  const response = await Moralis.EvmApi.nft.getWalletNFTs(options);
  return response.result as Nft[];
};

const initialFetchedNft: NftProp[] = [];

export const Market: React.FC<{ handleBuyNft: (price: number) => void; updateBalance: (price: number) => void }> = ({ handleBuyNft, updateBalance }) => {
  const { data: nfts, isLoading } = useQuery<Nft[]>('nfts', getNfts);
  const [fetchedNft, setFetchedNft] = useState<NftProp[]>(initialFetchedNft);
  const [errorHandled, setErrorHandled] = useState(false);

  const [showCollectButton, setShowCollectButton] = useState(false);
  const [selectedNftIndex, setSelectedNftIndex] = useState<number | null>(null);
  const [selectedNft, setSelectedNft] = useState<NftProp | null>(null);
  const [collection, setCollection] = useState<NftProp[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/complex-object');
      if (response.ok) {
        const data = await response.json();
        const nft: NftProp = {
          owner: data.name,
          price: data.price,
        };
        setFetchedNft([nft]);
        saveDataToLocalStorage([nft]);
      } else {
        throw new Error('Ошибка загрузки данных');
      }
    } catch (error: any) {
      console.error(error);
      if (!errorHandled) {
        setErrorHandled(true);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const saveDataToLocalStorage = (data: NftProp[]) => {
    localStorage.setItem('collection', JSON.stringify(data));
  };

  const handleCollectClick = (index: number, name: string, image: string) => {
    const nft: NftProp = {
      owner: name,
      image,
    };

    setSelectedNft(nft);
    setShowCollectButton(false);
    setCollection(prevCollection => {
      const newCollection = [...prevCollection, nft];
      saveDataToLocalStorage(newCollection);
      return newCollection;
    });
  };

  const handleBuyClick = (index: number) => {
    if (fetchedNft.length > 0 && fetchedNft[0]?.price) {
      const price = fetchedNft[0]?.price;
      handleBuyNft(price);
      updateBalance(price);
      setSelectedNftIndex(index);
      setShowCollectButton(true);
    } else {
      setShowCollectButton(false);
      console.log('Insufficient balance or no NFT data');
    }
  };
  
  if (isLoading) return <Loader><Spinner /></Loader>;

  return (
    <MarketContainer>
      {nfts?.map((nft, index) => (
        <NftContainer key={index}>
          {nft.metadata && nft.metadata.image ? (
            <NftImage
              src={`https://gateway.pinata.cloud/ipfs/${nft.metadata.image.replace('ipfs://', '')}`}
              alt=''
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const monkey: string = require('./img/nft-monkey.jpg');
                e.currentTarget.src = monkey;
              }}
            />
          ) : (
            <NftImagePlaceholder>
              Coming soon...
            </NftImagePlaceholder>
          )}

          <NftName>
            {nft.metadata && nft.metadata.name
              ? nft.metadata.name
              : 'Unnamed NFT'}
          </NftName>

          <NftItems>
            <Owner>Owner: {fetchedNft[0]?.owner}</Owner>
            <Price>
              Price: <Money>{fetchedNft[0]?.price} ETH</Money>
            </Price>
            {showCollectButton && selectedNftIndex === index ? (
              <NavLink
                to="/collection"
                state={{
                  purchasedNfts: [...collection],
                  selectedNft: {
                    image: nfts?.[index]?.metadata?.image ?? '',
                    name: nfts?.[index]?.metadata?.name ?? '',
                  },
                }}
              >
                <CollectButton onClick={() => handleCollectClick(index, nft.metadata?.name || '', nft.metadata?.image || '')}>
                  Collect
                </CollectButton>
              </NavLink>
            ) : (
              <BuyButton onClick={() => handleBuyClick(index)}>Buy</BuyButton>
            )}

          </NftItems>
        </NftContainer>
      ))}
    </MarketContainer>
  );
};
