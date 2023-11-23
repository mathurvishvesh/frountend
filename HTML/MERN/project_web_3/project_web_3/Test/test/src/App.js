import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header';
import Experience from './componants/Experience';
import Category from './componants/Category';
import About from './componants/About';
import Freelance from './componants/Freelance';
import Client from './componants/Client';
import Footer from './componants/Footer';
import Info from './componants/Info';



function App() {
  return (
    <>
      <div>

        <Header />
        <Experience />
        <Category />
        <About />
        <Freelance />
        <Client />
        <Freelance />
        <Info />
        <Footer />

      </div>
    </>
  );
}

export default App;
