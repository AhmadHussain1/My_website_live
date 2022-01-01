import React from "react";
import web from "../image/hassan.jpg";
import Common from "./Common";

export default function About() {
  return (
    <Common
      name="Welcome to about page"
      btname="Connect now"
      imgsrc={web}
      visit="/contact"
    ></Common>
  );
}
