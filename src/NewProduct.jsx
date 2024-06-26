import React, { useState } from "react";
import styled from "styled-components";
import { instance } from "./api/insance";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [formData, setFormData] = useState({
    file: null,
    productName: "",
    startDate: "",
    endDate: "",
    price: "",
    url: "",
  });
  const [previewImg, setPreviewImg] = useState(null);
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setPreviewImg(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, file: null });
    setPreviewImg(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productName", formData.productName);
    data.append("price", formData.price);
    data.append("productImg", formData.file);
    data.append("startDate", formData.startDate);
    data.append("endDate", formData.endDate);
    data.append("sellerId", 1);
    data.append("url", formData.url);

    try {
      const response = await instance.post("/gonggu/item/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        navigation("/sell");
      } else {
        alert("에러 입니다");
      }
    } catch (error) {
      console.error("Error uploading data", error);
      alert("에러 입니다");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {!previewImg && (
          <Label>
            파일 선택
            <FileInput
              type="file"
              name="file"
              accept="image/*"
              onChange={handleChange}
            />
          </Label>
        )}
        {previewImg && (
          <ImageContainer>
            <PreviewImage src={previewImg} alt="미리보기 이미지" />
            <RemoveButton onClick={handleRemoveImage}>x</RemoveButton>
          </ImageContainer>
        )}
        <FormField>
          <LabelText>상품명</LabelText>
          <Input
            type="text"
            name="productName"
            placeholder="상품명을 입력해주세요"
            value={formData.productName}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <LabelText>시작 날짜</LabelText>
          <Input
            type="text"
            name="startDate"
            placeholder="YYYY-MM-DD"
            value={formData.startDate}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <LabelText>종료 날짜</LabelText>
          <Input
            type="text"
            name="endDate"
            placeholder="YYYY-MM-DD"
            value={formData.endDate}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <LabelText>가격</LabelText>
          <Input
            type="text"
            name="price"
            placeholder="가격을 입력해주세요"
            value={formData.price}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <LabelText>상품 URL</LabelText>
          <Input
            type="text"
            name="url"
            placeholder="상품 판매 사이트를 제출해주세요"
            value={formData.url}
            onChange={handleChange}
          />
        </FormField>
        <Button type="submit">제출</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;

const Container = styled.div`
  font-family: "Pretendard-Regular", sans-serif;
  background-color: #f0f4f8; /* 부드러운 배경색 */
  padding: 40px;
  width: 430px;
  min-height: 932px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LabelText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border: 2px dashed #007bff;
  border-radius: 10px;
  text-align: center;
  position: relative;
  color: #007bff;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const PreviewImage = styled.img`
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 16px;
  padding: 0;
  transition: background 0.3s;

  &:hover {
    background: rgba(255, 0, 0, 1);
  }
`;

const Input = styled.input`
  padding: 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
