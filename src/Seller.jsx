import styled from "styled-components";
import SellProduct from "./SellProduct";
import { useNavigate } from "react-router-dom";

const Seller = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/sell/product");
  };

  return (
    <Container>
      <CategoryContainer>
        <Category>화장품 공구 모음</Category>
        <Button onClick={handleClick}>상품 등록</Button>
      </CategoryContainer>
      <Section>
        <SellProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <SellProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <SellProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <SellProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <SellProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <SellProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
      </Section>
    </Container>
  );
};

export default Seller;

const Container = styled.div`
  font-family: "Pretendard-Regular";
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 430px;
  height: 932px;
  gap: 20px;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Category = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const Button = styled.button`
  display: flex;
  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  background-color: skyblue;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
