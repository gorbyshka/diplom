import styled from "styled-components";

export const BlockCreateAndSell = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

export const ContainerCreateAndSell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateAndSellName = styled.div`
  margin-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 768px) {
    span {
      font-size: 32px;
      line-height: 42px;
    }
  }
`;

export const CreateAndSellNameText = styled.span`
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  color: #FFFFFF;
`;

export const CardsCreateAndSell = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  background: #211538;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-right: 50px;
  }
`;

export const Card = styled.div`
  width: 350px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const CardCollect = styled(Card)`
  background: linear-gradient(0deg, #301C49, #301C49);
  border-radius: 8px;
  margin-bottom: 45px;
`;

export const CardText = styled.span`
  margin-top: 24px;
  font-size: 24px;
  font-weight: 600;
`;

export const CardDescription = styled.small`
  font-size: 14px;
  color: #ffffff;
  margin-top: 20px;
  text-align: center;
`;

export const LineBreak = styled.div`
  margin-top: 5px;
`;
