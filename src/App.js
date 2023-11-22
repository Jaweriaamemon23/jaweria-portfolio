import Contactus from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Herosection from "./Components/Herosection";
import { Projects } from "./Components/Projects";
import SocialMedia from "./Components/socialmedia";


function App() {
  return (
    <div>
      <Header/>
      <Herosection/>
      <SocialMedia/>
      <Projects/>
      <Contactus/>
      <Footer/>
     </div>
  );
}

export default App;
