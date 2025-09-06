import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing"; 
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Contact from "./components/Contact";  
import AboutUsPage from "./components/About";
import Results from "./components/Results"; 
import OurWork from "./components/Our-Work";
import MetaPixel from "./components/Meta";
import ArtistDevelopment from "./components/ArtistDevelopment";

const App = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <MetaPixel pixelId={'513539781562239'}/>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Benefits />
              <Collaboration />
              <Services />
              <Pricing />
              <Roadmap />
              <Footer />
            </>
          }
        />
        {/* Contact Us Route */}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <ButtonGradient />
    </div>
  );
};
export default App;
