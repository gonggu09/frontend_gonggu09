import styled from "styled-components";
import ProductSection from "./ProductSection";
import Header from "./Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <CategorySection>
        <Category>화장품</Category>
        <Category>의류</Category>
        <Category>숙박</Category>
        <Category>음식</Category>
      </CategorySection>
      <Section>
        <ProductSection />
        <ProductSection />
        <ProductSection />
        <ProductSection />
        <ProductSection />
      </Section>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 430px;
  height: 932px;
  gap: 30px;
`;

const CategorySection = styled.div`
  display: flex;
`;

const Category = styled.span`
  font-size: 14px;
  color: black;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
