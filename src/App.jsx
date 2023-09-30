import "./App.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Banner from "./components/Banner";
import About from "./components/About";
import Acordion from "./components/Acordion";
import Community from "./components/Community";
import CommunitySlider from "./components/CommunitySlider";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Join from "./components/Join";
import Nav from "./components/Nav";
import NavMobile from "./components/NavMobile";
import PlanList from "./components/PlanList";
import Pricing from "./components/Pricing";
import Workout from "./components/Workout";
import WorkoutSlider from "./components/WorkoutSlider";

function App() {

  Aos.init({
    duration:2500,
    delay:400,
  })

  return (
    <div className="mx-auto bg-neutral-500 overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workout />
      <Pricing />
      <Community />
      <Faq />
      <Join name="Join" />
      <Footer />
    </div>
  );
}

export default App;
