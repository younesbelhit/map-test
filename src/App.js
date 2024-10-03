import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import { NotFound } from "./pages/NotFound";
import { RouteDetails } from "./pages/Home/RouteDetails";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} /> 
      <Route path="routes/:id" element={<RouteDetails />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
  )
};

export default App;
