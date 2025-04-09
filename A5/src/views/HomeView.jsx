import { Link } from "react-router-dom";
import "./HomeView.css";
import Header from "../components/header";
import Hero from "../components/Hero";

function HomeView() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}

export default HomeView;
