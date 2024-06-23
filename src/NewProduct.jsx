import styled from "styled-components";

const NewProduct = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Form onClick={handleSubmit}>
        <input type="file" />
        <input type="text" placeholder="상품명" />
        <input type="text" placeholder="시작 날짜" />
        <input type="text" placeholder="종료 날짜" />
        <input type="text" placeholder="가격" />
        <input type="text" placeholder="url" />
      </Form>
    </Container>
  );
};

export default NewProduct;

const Container = styled.div`
  font-family: "Pretendard-Regular";
  background-color: yellow;
  padding: 30px;
  width: 430px;
  height: 932px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
