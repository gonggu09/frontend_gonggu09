import Header from "./Header";

const Home = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Home;
