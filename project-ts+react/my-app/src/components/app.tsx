import {
  FC,
  useState,
  useEffect
} from 'react';

import '../normalize.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import {
  QueryClient,
  QueryClientProvider
} from 'react-query';

import { animateScroll } from 'react-scroll';
import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import { Market } from '../pages/market/market';
import { Wallet } from '../pages/wallet/wallet';
import { Collection } from '../pages/collection/collection';
import { Image } from './main/buyandsell/image';

import {
  AppContainer,
  BtnsContainer,
  GlobalStyle,
  ScrollBtn,
  ScrollbarStyle
} from './appStyle.style';

import Web3 from 'web3';
import { NftProp } from '../types/marketTypes/NftProp';

const queryClient = new QueryClient();

export const App: FC = () => {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [balance, setBalance] = useState<number>(100);
  const [fetchedNft, setFetchedNft] = useState<NftProp[]>([]);
  const [headerBalance, setHeaderBalance] = useState<number>(100);
  const [insufficientBalance, setInsufficientBalance] = useState(false);

  useEffect(() => {
    const getWalletBalance = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(Web3.givenProvider || 'ws://localhost:8546');
        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0];
        const weiBalance = await web3.eth.getBalance(walletAddress);
        const etherBalance = Number(web3.utils.fromWei(weiBalance, 'ether'));
        setBalance(etherBalance);
      } else {
        setBalance(100);
      }
    };

    getWalletBalance();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.pageYOffset === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateBalance = (price: number) => {
    if (headerBalance >= price) {
      const newBalance = headerBalance - price;
      setHeaderBalance(newBalance);
      console.log(newBalance);
    } else {
      console.log('Insufficient balance');
    }
  };

  const handleBuyClick = () => {
    if (fetchedNft.length > 0 && fetchedNft[0]?.price) {
      const price = Number(fetchedNft[0]?.price);
      if (headerBalance >= price) {
        updateBalance(price);
      } else {
        console.log('Insufficient balance');
      }
    } else {
      console.log('No NFT data');
    }
  };

  return (
    <AppContainer>

      <GlobalStyle />

      <ScrollbarStyle />

      <BrowserRouter>

        <Header
          initialBalance={headerBalance.toString()}
          handleUpdateBalance={updateBalance}
        />

        <BtnsContainer>

          {isAtTop && (

            <ScrollBtn
              onClick={() => animateScroll.scrollToBottom()}
            >

              <Image
                Src={require('././icons/arrow-down.svg').default}
                Alt={'arrow-down'}
              />

            </ScrollBtn>
          )}

        </BtnsContainer>

        <QueryClientProvider client={queryClient}>

          <Routes>

            <Route path="/" element={<Main />} />

            <Route path="/market" element={
              <Market
                handleBuyNft={handleBuyClick}
                updateBalance={updateBalance}
                insufficientBalance={insufficientBalance}
                balance={balance}
              />} />

            <Route path="/artists" element={<h1>Artist</h1>} />

            <Route path="/collection" element={<Collection />} />

            <Route path="/wallet" element={<Wallet />} />

          </Routes>

        </QueryClientProvider>

        <BtnsContainer>

          {!isAtTop && (

            <ScrollBtn
              onClick={() => animateScroll.scrollToTop()}
            >

              <Image
                Src={require('././icons/arrow-up.svg').default}
                Alt={'arrow-up'}
              />

            </ScrollBtn>
          )}

        </BtnsContainer>

        <Footer />

      </BrowserRouter>

    </AppContainer>
  );
};
