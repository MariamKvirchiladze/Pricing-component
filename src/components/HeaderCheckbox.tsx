import styled from "styled-components";

interface CheckBox {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}

const HeaderCheckbox = ({ checked, setChecked }: CheckBox): JSX.Element => {
  return (
    <HeaderContainer checked={checked}>
      <h1>Our Pricing</h1>
      <div className="checkbox">
        <p className="annualy">Annualy</p>
        <div className="inputDiv">
          <input
            type="checkbox"
            onClick={() => setChecked(!checked)}
            checked={checked}
            style={{
              transform: checked ? "translateX(4px)" : "translateX(28px)",
            }}
          />
        </div>
        <p className="monthly">Monthly</p>
      </div>
    </HeaderContainer>
  );
};

export default HeaderCheckbox;

const HeaderContainer = styled.div<{ checked: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;

  h1 {
    font-size: 32px;
    line-height: 39px;
    color: #6e728e;
    margin-top: 64px;
    @media (min-width: 1024px) {
      margin-top: 71px;
    }
  }

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  p {
    line-height: 28px;
    color: #6e728e;
    mix-blend-mode: normal;
    opacity: 0.5;
  }
  .annualy {
    font-size: ${(props) => (props.checked ? "18px" : "15px")};
  }
  .monthly {
    font-size: ${(props) => (props.checked ? "15px" : "18px")};
  }

  .inputDiv {
    width: 56px;
    height: 32px;
    appearance: none;
    outline: none;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    border-radius: 16px;
    position: relative;
  }
  .inputDiv:hover {
    opacity: 0.5;
  }

  input {
    appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #ffffff;
    transition: all 0.3s;
    cursor: pointer;
  }
`;
