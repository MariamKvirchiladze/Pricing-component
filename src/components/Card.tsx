import { CardPropsTypes } from "../types";
import styled from "styled-components";

const Card = ({ cardInfo, index, checked }: CardPropsTypes) => {
  return (
    <CardContainer background={cardInfo[index].bgcolor}>
      <div className="title">
        <h3 className="level">{cardInfo[index].level}</h3>
        <h1 className="price">
          {checked ? cardInfo[index].yearlyPrice : cardInfo[index].price}
        </h1>
      </div>
      <div className="information">
        <div className="divider"></div>
        <h4>{cardInfo[index].storage}</h4>
        <div className="divider"></div>
        <h4>{cardInfo[index].user}</h4>
        <div className="divider"></div>
        <h4>{cardInfo[index].sendsize}</h4>
        <div className="divider"></div>
      </div>
      <button>LEARN MORE</button>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<{ background: string }>`
  width: 327px;
  background: ${(props) => props.background};
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-radius: 10px;
  padding: 31px 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 32px;
  &:hover {
    transform: scale(1.05);
  }
  @media (min-width: 1024px) {
    width: 350px;
    padding: ${(props) =>
      props.background !== "#ffffff" ? "54.45px 31px" : "31px"};
  }

  h1 {
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
  .level {
    font-size: 18px;
    line-height: 28px;
    color: ${(props) => (props.background === "#ffffff" ? "#6e728e" : "white")};
  }
  .price {
    font-size: 72px;
    line-height: 71px;
    letter-spacing: -2.16px;
    color: ${(props) => (props.background === "#ffffff" ? "#4a4d60" : "white")};
  }
  .information {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
  h4 {
    font-size: 15px;
    line-height: 28px;
    color: ${(props) =>
      props.background === "#ffffff" ? " #6e728e" : "white"};
  }
  .divider {
    width: 269px;
    height: 1px;
    opacity: 0.25;
    background: #6e728e;
  }

  button {
    width: 100%;
    height: 44px;
    border: none;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 1.393px;
    color: ${(props) => (props.background === "#ffffff" ? "white" : "#6D72DE")};
    background: ${(props) =>
      props.background === "#ffffff"
        ? "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
        : "white"};
    border-radius: 6px;
    cursor: pointer;
  }
  button:hover {
    background: fixed;
    color: ${(props) => (props.background === "#ffffff" ? "#6D72DE" : "white")};
    border: ${(props) =>
      props.background === "#ffffff" ? "1px solid #6D72DE" : "1px solid #fff"};
  }
`;
