import Heading from "../Header/Heading";
import Skills from '../Skills/Skills';
import Info from "../Info/Info";
function App() {
  return (
    <div className="App">
      <div className="container-lg px-sm-5">
        <Heading />
        <header className="py-3 px-4 text-center">
          <h1 className="fHL">Design solutions made easy</h1>
          <p className="small textGray px-5 px-md-4">With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</p>
        </header>
        <Skills />
        <Info/>
      </div>
    </div>
  );
}

export default App;
