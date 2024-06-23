import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Select = () => {
  const navigation = useNavigate();

  const handleSellerClick = () => {
    navigation("/sell");
  };

  const handleBuyClick = () => {
    navigation("/buy");
  };

  return (
    <Container>
      <Text>당신은 어떤 고객 유형입니까?</Text>
      <Type>
        <Button onClick={handleBuyClick}>구매자</Button>
        <Button onClick={handleSellerClick}>판매자</Button>
      </Type>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  font-family: "Pretendard-Regular";
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  width: 430px;
  height: 932px;
  gap: 20px;
`;

const Text = styled.span`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

const Type = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 0;
  font-size: 20px;
  width: 100px;
  height: 50px;

  &:hover {
    color: #007bff;
    border-color: #007bff;
  }
`;
