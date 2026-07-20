import React from "react";
import { Content, Footer, Header } from "./func-components";
import Calendar from "./class-components";

function App() {
  return (
    <>
      <Header />

      <div style={{ textAlign: "center" }}>
        <Calendar />
      </div>

      <Content />
      <Footer />
    </>
  );
}

export default App;