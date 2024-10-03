import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import { Map } from "../Map";
import { useSelector } from "react-redux";
import { get } from "lodash";

export const Layout = () => {
  const pointsState = useSelector((s) => s.routes.getOne);
  const pointsData = get(pointsState, "data", []);
  const points = useMemo(() => {
    return pointsData.map((p) => [p.lat, p.lng]);
  }, [pointsData]);

  return (
    <div className="container">
      <div className="left-bar">
        <Map {...{ points }} />
      </div>
      <div className="right-bar">
        <div style={{ padding: "10px" }}>
          <Outlet />
        </div>
        <div
          style={{
            backgroundColor: "#d9d9d9",
            textAlign: "center",
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <span style={{ color: "#333333" }}>React test - Younes BELHIT</span>
        </div>
      </div>
    </div>
  );
};
