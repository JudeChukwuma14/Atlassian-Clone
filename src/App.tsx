import React from "react";
import Header from "./Header";
import { GlobalStyle } from "./Component/GlobalStyle";
import { Landingpage } from "./Component/Landingpage";
import { Foot } from "./Component/Foot";


export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
   <Landingpage />
   <Foot />

  </>
);
