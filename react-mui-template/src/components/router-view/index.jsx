import React from "react";
import routes from "../../routes.js";
import { Routes, Route } from "react-router-dom";

const NotFound = () => {
  return <div>404</div>;
};
const RouterView = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterView;
