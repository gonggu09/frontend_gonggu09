import React, { useState } from "react";
import styled from "styled-components";

const ProductSection = ({
  url,
  productName,
  productImg,
  sellerImg,
  sellerName,
  startDate,
  endDate,
  price,
}) => {
  const [previewProductImg, setPreviewProductImg] = useState(productImg);
  const [previewSellerImg, setPreviewSellerImg] = useState(sellerImg);

  const handleProductImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewProductImg(URL.createObjectURL(file));
    }
  };

  const handleSellerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewSellerImg(URL.createObjectURL(file));
    }
  };

  return (
    <Container>
      <Link href={url}>
        <ProductImage src={previewProductImg} alt="상품 이미지" />
        <Content>
          <ProductName>{productName}</ProductName>
          <DetailContent>
            <Profile>
              <ProfileImage src={previewSellerImg} alt="판매자 이미지" />
              <Text>{sellerName}</Text>
            </Profile>
            <Text>
              공구 기간 : {startDate} ~ {endDate}
            </Text>
            <Text>가격 : {price}원</Text>
          </DetailContent>
        </Content>
      </Link>
      <ImageUpload>
        <label>
          상품 이미지 업로드
          <input
            type="file"
            accept="image/*"
            onChange={handleProductImageChange}
          />
        </label>
        <label>
          판매자 이미지 업로드
          <input
            type="file"
            accept="image/*"
            onChange={handleSellerImageChange}
          />
        </label>
      </ImageUpload>
    </Container>
  );
};

export default ProductSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  padding: 15px;
  gap: 15px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

const Link = styled.a`
  display: flex;
  width: 100%;
  text-decoration: none;
  color: inherit;
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
  width: 100%;
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
  border-radius: 50%;
`;

const ProductName = styled.span`
  color: black;
  font-size: 16px;
`;

const Text = styled.p`
  color: black;
  font-size: 10px;
  margin: 0;
`;

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 12px;
  }

  input {
    font-size: 12px;
  }
`;
