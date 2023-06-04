import React from 'react';
import styled from 'styled-components';
import { Image } from '../buyandsell/image';
import { CardLatestProps } from '../../../types/mainTypes/CardLatestProps';

export const OurLatestBlogContainer = styled.div`
  margin-top: 200px;

  @media (max-width: 768px) {
    margin-top: 100px;
  }
`;

export const LatestBlock = styled.div``;

export const LatestName = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;

  @media (max-width: 768px) {
    p {
      font-size: 32px;
    }
  }
`;

export const LatestCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  font-size: 48px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 0 1px rgba(197, 34, 228, 0.71), 0 0 0 2px rgba(90, 25, 244, 0.72);
  width: 388px;
  height: 540px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 300px;
    height: auto;
    margin-bottom: 20px;
    margin-left: 210px;
  }
`;

export const LatestImg = styled.div`
  height: 380px;
  position: relative;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const LatestAdmin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  padding: 0 20px;

  small {
    font-size: 12px;
  }
`;

export const LatestText = styled.div`
  padding: 0 20px;

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  small {
    font-size: 12px;
    color: #ffffff;
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;

export const LatestItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`;

export const LinkLatest = styled.a`
  text-decoration: none;
  color: #ffffff;
  background: linear-gradient(
    98.94deg,
    rgba(200, 34, 228, 0.4) 2.52%,
    rgba(87, 25, 244, 0.4) 92.81%
  );
  font-size: 14px;
  border-radius: 5px;
  padding: 8px 15px;
`;

export const LatestIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-left: 24px;
  }
`;

export const Small = styled.small``;

export const P = styled.p``;

export const LineBreak = styled.div`
  margin-top: 5px;
`;
