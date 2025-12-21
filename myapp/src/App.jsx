import React from "react";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div>
      <Header />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
