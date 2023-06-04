import styled from "styled-components";

export const Card = styled.div`
  width: 388px;
  height: 449px;
  top: 0;
  right: 0;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(197, 34, 228, 0.71), 0 0 0 2px rgba(90, 25, 244, 0.72);

  @media screen and (max-width: 768px) {
    width: 288px;
    height: 349px;
  }
`;

export const CardPhotos = styled.div`
  display: flex;
  margin-left: 22px;
  margin-top: 24px;
`;

export const CardPhotoLeft = styled.img`
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 210px;
  }
`;

export const CardPhotosRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardPhotoRight = styled.img`
  margin-bottom: 10px;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const CardItem = styled.div`
  display: flex;
  margin-left: 22px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const CardTextParagraph = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const CardTextSmall = styled.small`
  margin-top: 20px;
`;

export const CardArrow = styled.div`
  margin-left: 80px;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    margin-right: 15px;
    margin-left: 0;
  }
`;

export const TopGalleriesBlock = styled.div`
  margin-top: 150px;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const ContainerGalleries = styled.div``;

export const GalleriesName = styled.div`
  text-align: center;
  color: white;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const GalleriesCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const GalleriesBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const GalleriesBtnLink = styled.a`
  text-align: center;
  text-decoration: none;
  color: white;
  width: 50px;
  height: 20px;
  padding: 16px 32px;
  border-radius: 4px;
  background: linear-gradient(to right, rgba(200, 34, 228, 0.3) 0%, rgba(87, 25, 244, 0.3) 100%);
`;

export const Span = styled.span``;

export const Name = styled.p`
  font-size: 48px;
  font-weight: bold;

@media screen and (max-width: 768px) {
  font-size: 32px;
}
`;