import Heading from "../Header/Heading";
import Skills from '../Skills/Skills';
import Info from "../Info/Info";
import Work from "../Work/Work";
import Appointment from '../Appointment/Appointment';
import images from '../../script'
function App() {
  return (
    <div className="App">
        <Heading />
        <div className="container-lg px-md-5">
        <header className="py-3 px-md-4 px-2 text-center">
          <h1 className="fHL">Design solutions made easy</h1>
          <p className="small textGray px-sm-5 px-2 px-md-4 headWidth mx-auto">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
        </header>
        </div>
        <Skills />
        <Info/>
        <Work images={images}/>
        <Appointment/>
         <Heading />
      </div>
  );
}

export default App;
