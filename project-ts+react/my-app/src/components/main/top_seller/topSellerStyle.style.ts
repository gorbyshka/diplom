import styled from "styled-components";

export const SliderContainer = styled.div`
  .slick-next,
  .slick-prev {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    opacity: 0.7;
    background-color: rgba(217, 217, 217, 0.08);
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 1;
      background: linear-gradient(104.35deg, rgba(179, 33, 231, 0.4) 29.82%, rgba(105, 27, 242, 0.4) 97.24%);
    }
    
    &::before {
      color: black;
      font-size: 24px;
    }
  }

  .slick-next {
    bottom: 50px;
    right: 15px;
  }

  .slick-prev {
    bottom: 50px;
    left: 15px;
    z-index: 1;
  }

  .slick-next:before {
    content: url(${require('./icons/right.svg').default});
    margin-left: 3px;
  }

  .slick-prev:before {
    content: url(${require('./icons/left.svg').default});
    margin-right: 3px;
  }

  .slick-slide > div {
    margin: 0 10px;
  }
`;

export const SlideItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;

  img {
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    text-align: center;
  }
`;

export const TopSellerBlock = styled.div`
  margin-top: 150px;
  
  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const TopSellerName = styled.div`
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: 700;
  
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Text = styled.p``;

export const CardSellerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  height: 100px;
  margin-left: 1200px;
  background-color: rgba(217, 217, 217, 0.08);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 260px;
    height: auto;
    margin-left: 50px;
    margin-top: 30px;
    padding: 10px;
    box-sizing: border-box;
    flex-direction: row;
    gap: 20px;
  }
`;

export const CardSellerImage = styled.img`
  order: 1;
  margin-left: 20px;
  margin-top: 10px;
  
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 80px;
    margin-top: 0;
    margin-left: 0;
  }
`;

export const CardSellerText = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    flex-grow: 1;
    align-items: flex-start;
    margin-left: 0;
  }
`;

export const CardSellerParagraph = styled.p`
  color: white;
  font-size: 18px;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const CardSellerSmall = styled.small`
  margin-top: 15px;
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-right: 0;
  }
`;
