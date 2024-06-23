import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>우리의 프로젝트 이름</Logo>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 430px;
  padding: 20px 0;
  background-color: white;
  border-bottom: 1px solid #d9d9d9;
`;

const Logo = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
