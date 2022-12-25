import Navbar from "./components/navbar/Navbar";
import H_section from "./components/navbar/hero_section/H_section";
import Services_section from "./components/navbar/hero_section/section__2/Services_section";
import Footer from "./components/navbar/hero_section/section__2/footer/Footer";
import './app.css'
function App() {
  return(
    <>
    <Navbar />
    <H_section />
    <Services_section />
    <Footer />
    </>
  ) 
}

export default App;
