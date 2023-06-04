import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerText = styled.div`
  color: white;
  margin-left: 100px;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    text-align: center;
  }
`;

export const ContainerNameBuy = styled.p`
  font-size: 64px;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Nft = styled.span`
  background: linear-gradient(259.74deg, #af25d3 75.33%, #9725d6 85.93%, #5e23d9 98.26%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
`;

export const Small = styled.small`
  font-size: 14px;
  line-height: 20px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ContainerBtns = styled.div`
  display: flex;
  margin-top: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ExploreBtn = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(101.9deg, rgba(201, 34, 227, 0.4) 7.67%, rgba(153, 30, 234, 0.4) 52.66%, rgba(73, 23, 246, 0.4) 93.7%);
  border-radius: 4px;
  width: 123px;
  height: 54px;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

export const PlayItems = styled.div`
  border-radius: 50%;
  background-color: black;
  width: 40px;
  height: 40px;
  margin-left: 24px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }
`;

export const Play = styled.div`
  margin-left: 13px;
  margin-top: 12px;

  @media screen and (max-width: 768px) {
    margin-left: 8px;
  }
`;

export const PlayBtn = styled.div`
  margin-top: 20px;
  margin-left: 16px;

  @media screen and (max-width: 768px) {
    margin-left: 8px;
  }
`;

export const BlockCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 47px;
  width: 500px;
  height: 100px;
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(2px);
  margin-right: -210px;
  margin-top: 80px;

@media screen and (max-width: 768px) {
    width: 350px;
    height: 60px;
    margin-left: 140px;    
    margin-top: 40px;
}
`;

export const CountUsers = styled.div`
  display: flex;
  margin-left: -40px;

@media screen and (max-width: 768px) {
  margin-left: 0;
}
`;

export const CountUserText = styled.p`
  font-weight: 700;
  font-size: 36px;
  margin: 0 50px;

@media screen and (max-width: 768px) {
  margin: 0 30px;
  font-size: 24px;
}
`;

export const BlockCategory = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: -35px;

@media screen and (max-width: 768px) {
  margin-left: 0;
}
`;

export const CategoryText = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin-left: 50px;

@media screen and (max-width: 768px) {
  margin-left: 30px;
  font-size: 12px;
}
`;

export const Artworks = styled(CategoryText)`
  margin-left: 120px;

@media screen and (max-width: 768px) {
  margin-left: 60px;
}
`;

export const Artist = styled(CategoryText)`
  margin-left: 135px;

@media screen and (max-width: 768px) {
  margin-left: 80px;
}
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-left: 286px;

@media screen and (max-width: 768px) {
  width: 100%;
  margin-left: 0;
}
`;

export const Cat = styled.div`
  width: 140px;
  height: 140px;
  margin-bottom: 500px;
  margin-left: -50px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const FaceOne = styled.div`
  width: 499px;
  height: 493px;
  margin-top: 290px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const Cube = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 550px;
  margin-left: -370px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const Skeleton = styled.div`
  width: 248px;
  height: 248px;
  margin-left: 230px;
  margin-bottom: 280px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const FaceTwo = styled.div`
  width: 110px;
  height: 130px;
  margin-top: 400px;
  margin-left: -20px;

@media screen and (max-width: 768px) {
  display: none;
}
`;

export const MainBtnLink = styled.a`color: white; text-decoration: none;`;

export const BuySell = styled.div``;

export const ImgMain = styled.img``;

export const LineBreak = styled.div`margin-top: 10px;`;