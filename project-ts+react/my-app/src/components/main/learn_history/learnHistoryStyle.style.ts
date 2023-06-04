import styled from 'styled-components';
import { Image } from '../buyandsell/image';

export const BlockHistory = styled.div`
  margin-left: 40px;
  margin-top: 150px;

  @media screen and (max-width: 748px) {
    margin-top: 80px;
  }
`;

export const BlockText = styled.div`
  display: flex;
  margin-left: 55px;
  color: white;

  @media screen and (max-width: 748px) {
    flex-direction: column;
  }
`;

export const SmallBlock = styled.p`
  font-size: 16px;
  margin-left: 123px;
`;

export const BlockMainItems = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 120px;

`;

export const BlockMainBtn = styled.div`
  margin-top: 20px;
  border: 1px solid transparent;
  border-image: linear-gradient(97.79deg, #EA00AD 0.9%, #8A40FF 98.32%) 1;
  padding: 20px 32px;
`;

export const BlockMainArrow = styled.div`
  margin-top: 30px;
  margin-right: 10px;
`;

export const ArrowImage = styled(Image)`
  margin-left: 10px;
`;

export const BlockImg = styled.div`
  display: flex;
  margin-left: 50px;

`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgPearson1 = styled.div`
  display: flex;
  width: 614px;
  height: 400px;
  background: linear-gradient(112.28deg, rgba(198, 34, 228, 0.4) 2.22%, rgba(109, 26, 241, 0.4) 96.94%);

  @media screen and (max-width: 748px) {
    width: 307px;
    height: 200px;
    margin: 20px 220px;
  }
`;

export const ImgSubsBlock = styled.div`
  width: 176px;
  height: 160px;
  background: #232323;
  border-radius: 80px 0px 0px 80px;
  margin-top: 150px;
  margin-left: 50px;

  @media screen and (max-width: 748px) {
    display: none;
  }
`;

export const Subs = styled.div`
  margin-left: 40px;
  margin-top: 20px;
`;

export const ImgPearson = styled.div`
  margin: 0 80px;
  color: white;
  font-size: 16px;

  @media screen and (max-width: 748px) {
    display: none;
  }
`;

export const ImgPearson4 = styled.div`
  margin-bottom: 50px;
  margin-left: 93px;

  @media screen and (max-width: 748px) {
    display: none;
  }
`;

export const Pearson2Text = styled.div`
  display: flex;
  margin-top: 33px;
  text-align: center;
  margin-left: 50px;
`;

export const Pearson3Text = styled.div`
  display: flex;
  margin-top: 33px;
  text-align: center;
  margin-left: 50px;
`;

export const Pearson2Views = styled.div`
  margin-left: 15px;
`;

export const Pearson3Views = styled.div`
  margin-left: 15px;
`;

export const Text = styled.h1`
font-size: 32px;
font-weight: bold;
`;

export const Span = styled.span``;

export const LineBreak = styled.div`margin-top: 10px;`;