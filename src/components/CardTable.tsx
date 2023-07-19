import { useState, useEffect } from "react";
import { cardDataTypes } from "../types";
import axios from "axios";
import styled from "styled-components";
import { props } from "../types";
import Card from "./Card";

const CardTable = ({ checked }: props): JSX.Element => {
  const [cardInfo, setCardInfo] = useState<cardDataTypes[]>([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get("/data.json");
      const info = response.data;
      setCardInfo(info);
    };
    request();
  }, []);
  return (
    <CardTableContainer>
      {cardInfo.map((info, index) => (
        <Card
          cardInfo={cardInfo}
          info={info}
          checked={checked}
          index={index}
          key={index}
        />
      ))}
    </CardTableContainer>
  );
};

export default CardTable;

const CardTableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32.5px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;
