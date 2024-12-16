import { useState } from "react";
import About from "../componets/About";
import Banner from "../componets/Banner";
import Categories from "../componets/Categories";
import Contact from "../componets/Contact";
import Products from "../componets/Products";

const HomePage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen`}>
      {/* Theme Toggle Button */}
      <div className="p-4 text-right">
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition"
        >
          {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div>
      
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
