import styled from "styled-components";

const SellProduct = ({
  url,
  productName,
  productImg,
  sellerImg,
  sellerName,
  startDate,
  endDate,
  price,
}) => {
  return (
    <Container href={url}>
      <ProductImage src={productImg} alt="상품 이미지" />
      <Content>
        <ProductName>{productName}</ProductName>
        <DetailContent>
          <Profile>
            <ProfileImage src={sellerImg} alt="판매자 이미지" />
            <Text>{sellerName}</Text>
          </Profile>
          <Text>
            공구 기간 : {startDate} ~ {endDate}
          </Text>
          <Text>가격 : {price}원</Text>
        </DetailContent>
      </Content>
    </Container>
  );
};
export default SellProduct;

const Container = styled.a`
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
