import styled from "styled-components";
import BuyProduct from "./BuyProduct";

const Buyer = () => {
  return (
    <Container>
      <CategoryContainer>
        <Category>화장품 공구 모음</Category>
      </CategoryContainer>
      <Section>
        <BuyProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <BuyProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <BuyProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <BuyProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <BuyProduct
          url="https://www.naver.com"
          productName="유리아쥬 립밤"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <BuyProduct
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

export default Buyer;

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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
