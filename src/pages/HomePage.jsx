import { useState } from "react";
import About from "../componets/About";
import Banner from "../componets/Banner";
import Categories from "../componets/Categories";
import Contact from "../componets/Contact";
import Products from "../componets/Products";

const HomePage = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Products */}
      <Products />

      {/* Categories */}
      <Categories />

      {/* About */}
      <About />

      {/* Contact */}
      <Contact />
    </div>
  );
};

export default HomePage;
