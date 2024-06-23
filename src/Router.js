import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Buyer from "./Buyer";
import Seller from "./Seller";
import NewProduct from "./NewProduct";
import Select from "./Select";

const Layout = ({ children }) => {
  return <Home>{children}</Home>;
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Select />
            </Layout>
          }
        />
        <Route
          path="/buy"
          element={
            <Layout>
              <Buyer />
            </Layout>
          }
        />
        <Route
          path="/sell"
          element={
            <Layout>
              <Seller />
            </Layout>
          }
        />
        <Route path="/sell/product" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
