import styled from "styled-components";
import SellProduct from "./SellProduct";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "./api/insance";

const Seller = () => {
  const navigation = useNavigate();

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/gonggu/item/");
        if (response.status === 200) {
          setProductList(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    navigation("/sell/product");
  };

  return (
    <Container>
      <CategoryContainer>
        <CategoryList>
          <SelectedCategory>화장품</SelectedCategory>
          <Category>음식</Category>
          <Category>의류</Category>
          <Category>숙박</Category>
        </CategoryList>
        <Button onClick={handleClick}>상품 등록</Button>
      </CategoryContainer>
      <Section>
        {productList?.map((item, index) => (
          <SellProduct
            key={index}
            url={item.url}
            productName={item.productName}
            productImg={item.productImg}
            sellerImg={item.sellerId.profile_photo}
            sellerName={item.sellerId.name}
            startDate={item.startDate}
            endDate={item.endDate}
            price={item.price}
          />
        ))}
        <SellProduct
          url="https://instashop.srookpay.com/triz06/Detail/STR58179078"
          productName="하루의 톤업크림"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/766d8754-afa9-44e5-8f54-b9750a543045"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/76a4da2d-7d07-4c9a-9627-147f1fb30746"
          sellerName="하루"
          startDate="2024-05-04"
          endDate="2024-06-25"
          price="28000"
        />
        <SellProduct
          url="https://link.inpock.co.kr/boramchan_mk?fbclid=PAAaZhiw1B2cKlckuraYpFdoVBNtR32nEQklWPkRCwJQEqQLt4xjXDlty17Ww"
          productName="솔핑 톤업크림"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/babd7f20-1027-4c7d-a54b-faec7f26458c"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/babd7f20-1027-4c7d-a54b-faec7f26458c"
          sellerName="솔핑"
          startDate="2024-06-23"
          endDate="2024-06-25"
          price="20000"
        />
        <SellProduct
          url="https://link.inpock.co.kr/boramchan_mk?fbclid=PAAaZhiw1B2cKlckuraYpFdoVBNtR32nEQklWPkRCwJQEqQLt4xjXDlty17Ww"
          productName="앰플"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/9f999d2f-0ddd-4bf7-889a-87541ce98534"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/9f999d2f-0ddd-4bf7-889a-87541ce98534"
          sellerName="솔핑"
          startDate="2024-06-07"
          endDate="2024-06-10"
          price="15000"
        />
        <SellProduct
          url="https://link.inpock.co.kr/boramchan_mk?fbclid=PAAaZhiw1B2cKlckuraYpFdoVBNtR32nEQklWPkRCwJQEqQLt4xjXDlty17Ww"
          productName="쿠션"
          productImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/ce777b30-89a4-440f-9e8b-fb537b4ce791"
          sellerImg="https://github.com/gonggu09/frontend_gonggu09/assets/129318957/ce777b30-89a4-440f-9e8b-fb537b4ce791"
          sellerName="솔핑"
          startDate="2024-05-24"
          endDate="2024-06-01"
          price="30000"
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

const SelectedCategory = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #007bff;
  padding: 10px;
  border: 1px solid #007bff;
  border-radius: 5px;
`;

const CategoryList = styled.div`
  display: flex;
  gap: 10px;
`;

const Category = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: black;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;

const Button = styled.button`
  display: flex;
  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: white;
  background-color: #007bff;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
`;
