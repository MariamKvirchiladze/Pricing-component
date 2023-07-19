import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import bgTop from "./assets/bg-top.svg";
import bgBottom from "./assets/bg-bottom.svg";
import { useState } from "react";
import HeaderCheckbox from "./components/HeaderCheckbox";
import CardTable from "./components/CardTable";

function App() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <MainContainer>
      <GlobalStyles />
      <HeaderCheckbox checked={checked} setChecked={setChecked} />
      <CardTable checked={checked} />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  gap: 80px;
  background-color: #f7f7fe;
  background-image: url(${bgTop});
  background-repeat: no-repeat;
  background-position: right -195px top -30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    background-image: url(${bgTop}), url(${bgBottom});
    background-repeat: no-repeat, no-repeat;
    background-position: top 0px right 0px, bottom 0px left 0px;
    gap: 66.5px;
  }
`;
