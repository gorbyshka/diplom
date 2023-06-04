import React,
{
  useState,
  useEffect
} from 'react';

import {
  Container,
  Title,
  AddressText,
  BalanceText,
  Button,
  LineBreak
} from './walletStyle.style';

declare global {
  interface Window {
    ethereum?: {
      on: any;
      request?: (args: any) => Promise<any>;
      removeListener?: (event: string, callback: () => void) => void;
    };
  }
}

export const Wallet: React.FC = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<string | null>(null);
  const [walletBalance, setWalletBalance] = useState<string>(localStorage.getItem('walletBalance') || '100');
  const [headerBalance, setHeaderBalance] = useState<string>(walletBalance);

  const connectToMetaMask = () => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask доступен!');

      if (typeof window.ethereum.request !== 'undefined') {
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
            const walletAddress = accounts[0];
            setAddress(walletAddress);

            const getWalletData = async () => {
              if (window.ethereum) {
                const weiBalance = await window.ethereum.request?.({
                  method: 'eth_getBalance',
                  params: [walletAddress, 'pending'],
                });

                setBalance(weiBalance);
                setWalletBalance(weiBalance);
                localStorage.setItem('walletBalance', weiBalance);
              }
            };

            getWalletData();
          })
          .catch((error) => {
            console.log('Ошибка подключения к MetaMask:', error);
          });
      } else {
        console.log('Метод request не поддерживается MetaMask');
      }
    }
  };

  const handleAccountsChanged = () => {
    if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.request !== 'undefined') {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts) => {
          if (accounts.length === 0) {
            setAddress(null);
            setBalance(null);
          } else {
            const walletAddress = accounts[0];
            setAddress(walletAddress);
            const getWalletData = async () => {
              if (window.ethereum) {
                const weiBalance = await window.ethereum.request?.({
                  method: 'eth_getBalance',
                  params: [walletAddress, 'pending'],
                });
                setBalance(weiBalance);
                setHeaderBalance(weiBalance);
              }
            };
            getWalletData();
          }
        })
        .catch((error) => {
          console.log('Ошибка при получении адресов аккаунтов:', error);
        });
    }
  };

  const disconnectFromMetaMask = () => {
    if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.removeListener !== 'undefined') {
      window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      setAddress(null);
      setBalance(null);
    }
  };

  const formatBalance = (balance: string | null) => {
    if (balance !== null) {
      const etherBalance = parseFloat(balance) / 1e18;
      const roundedBalance = Math.round(etherBalance * 100) / 100;
      return roundedBalance.toFixed(2);
    }
    return '';
  };

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.on !== 'undefined') {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (typeof window.ethereum !== 'undefined' && typeof window.ethereum.removeListener !== 'undefined') {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  useEffect(() => {
    if (balance !== null) {
      setHeaderBalance(balance);
    }
  }, [balance]);

  useEffect(() => {
    if (address) {
      const savedBalance = localStorage.getItem('walletBalance');
      if (savedBalance !== null) {
        setBalance(savedBalance);
      }
    }
  }, [address]);

  return (
    <Container>

      <Title>
        Wallet
      </Title>

      {address ? (
        <>
        
          <AddressText>
            Вы уже вошли в систему с адресом: {address}
          </AddressText>

          <LineBreak />

          {balance !== null && (

            <BalanceText>
              Баланс кошелька: {formatBalance(balance)} ETH
            </BalanceText>

          )}

          <LineBreak />

          <Button onClick={disconnectFromMetaMask}>
            Выйти из кошелька
          </Button>

        </>

      ) : (

        <Button onClick={connectToMetaMask}>
          Подключить MetaMask и войти
        </Button>
      )}

    </Container>
  );
};
