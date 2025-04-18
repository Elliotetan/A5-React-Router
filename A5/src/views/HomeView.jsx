import { Link } from "react-router-dom";
import "./HomeView.css";
import Header from "../components/header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function HomeView() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default HomeView;
