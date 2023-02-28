import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import { Items } from "./Items";

export default function App() {
  return (
    <div className="app">
      <Banner />
      <Items />
      
    </div>
  );
}

function Banner() {
  return (
    <div className="container1">
      <h1>
        <span className="ShopInStyle">Shop in style</span>
      </h1>
      <h1>
        <span className="hompeageTemplate">
          With this shop hompeage template
        </span>
      </h1>
    </div>
  );
}

