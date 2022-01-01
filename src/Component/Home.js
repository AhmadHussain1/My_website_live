import React from "react";
import Common from "./Common";
import web from "../image/hassan.jpg";

export default function Home() {
  return (
    <Common
      name="Welcome to Home page"
      btname="Get Started"
      imgsrc={web}
      visit="/service"
    ></Common>
  );
}
