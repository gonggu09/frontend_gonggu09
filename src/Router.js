import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Buyer from "./Buyer";
import Seller from "./Seller";

const Layout = ({ children }) => {
  return <Home>{children}</Home>;
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
