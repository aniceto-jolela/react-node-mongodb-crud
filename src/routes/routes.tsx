import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../share/base-layout";
import Home from "../components/home/home";
import Table from "../components/data";
import Create from "../components/create";

const Routs = () => {
  return (
    <Layout
      Children={
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Create />} />
            <Route path="/dados" element={<Table />} />
          </Routes>
        </>
      }
    />
  );
};

export default Routs;