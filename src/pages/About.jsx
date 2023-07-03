import React from "react";
import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div>About</div>
      <Link to="mission">Mission</Link>
      <Outlet/>
    </>
  );
};
