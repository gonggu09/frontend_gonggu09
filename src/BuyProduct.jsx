import { useState } from "react";

import styled from "styled-components";

const BuyProduct = ({
  url,
  productName,
  productImg,
  sellerImg,
  sellerName,
  startDate,
  endDate,
  price,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Container>
      <ProductImage src={productImg} alt="상품 이미지" />
      <Content>
        <ProductName href={url}>{productName}</ProductName>
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
      <LikeContainer onClick={toggleLike}>
        <Like
          src={
            liked
              ? "https://github.com/gonggu09/frontend_gonggu09/assets/129318957/b1899fac-1c63-4d14-a3f8-f654fd185f0c"
              : "https://github.com/gonggu09/frontend_gonggu09/assets/129318957/ba1bc3d2-53b8-406d-abc3-eddadf64d348"
          }
          alt="하트 이미지"
        />
      </LikeContainer>
    </Container>
  );
};
export default BuyProduct;

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

const ProductName = styled.a`
  color: black;
  font-size: 16px;
`;

const Text = styled.p`
  color: black;
  font-size: 10px;
`;

const LikeContainer = styled.div`
  width: 25px;
  height: 25px;
`;

const Like = styled.img`
  width: 25px;
  height: 25px;
`;
