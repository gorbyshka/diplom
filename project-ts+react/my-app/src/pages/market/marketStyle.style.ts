import styled from "styled-components";

export const MarketContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 50px;
  color: #ffffff;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const NftContainer = styled.div`
  background-color: #893e9c;
  border: 1px solid #8823a6;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: box-shadow 0.2s ease-in-out;
  width: 200px;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const NftImage = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 150px;
    width: 150px;
  }
`;

export const NftImagePlaceholder = styled.div`
  align-items: center;
  display: flex;
  height: 200px;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 500;
  color: #ffffff;

  @media (max-width: 768px) {
    height: 150px;
    font-size: 1rem;
  }
`;

export const NftName = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Loader = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: 10px solid #2e1759;
  border-top: 10px solid #411691;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const NftItems = styled.div`
  text-align: center;
`;

export const Price = styled.div`
  margin-top: 10px;
`;

export const Money = styled.span`
  color: #47e04f;
  text-shadow: 0px 0px 0px 10px rgba(102, 187, 106, 0.5);
  font-weight: 600;
`;

export const Owner = styled.div`
@media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CollectButton = styled.button`
  margin-top: 10px;
  background: linear-gradient(101.9deg, rgba(201, 34, 227, 0.4) 7.67%, rgba(153, 30, 234, 0.4) 52.66%, rgba(73, 23, 246, 0.4) 93.7%);
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006699;
  }
`;

export const BuyButton = styled.button`
  margin-top: 10px;
  background: linear-gradient(101.9deg, rgba(201, 34, 227, 0.4) 7.67%, rgba(153, 30, 234, 0.4) 52.66%, rgba(73, 23, 246, 0.4) 93.7%);
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006699;
  }
`;