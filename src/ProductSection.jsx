import styled from "styled-components";

const ProductSection = () => {
  return (
    <Container>
      <ProductImage
        src="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7"
        alt=""
      />
      <Content>
        <ProductName>상품명</ProductName>
        <DetailContent>
          <Profile>
            <ProfileImage src="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/7c401452-f25d-4cde-b506-2005907d5ed7" />
            <Text>하루</Text>
          </Profile>
          <Text>공구 기간 : 2024.05.14 ~ 2024.05.16</Text>
          <Text>가격 : 28000원</Text>
        </DetailContent>
      </Content>
    </Container>
  );
};
export default ProductSection;

const Container = styled.div`
  display: flex;
  width: 370px;
  height: 120px;
  padding: 15px;
  gap: 15px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 235px;
  height: 90px;
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Profile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 100%;
`;

const ProductName = styled.span`
  color: black;
  font-size: 16px;
`;

const Text = styled.p`
  color: black;
  font-size: 10px;
`;
