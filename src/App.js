
import './App.css';
import AboutMe from './Components/Profil/AboutMe';
import FullName from './Components/Profil/FullName';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Profil/NavBar';
import Adresse from './Components/Profil/Adresse';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='name'>
        <div className=''>
      <FullName/> 
      <AboutMe/> 
      </div> 
      <img src ='./Portofolio.png'></img>
      </div>
       
      <Adresse/>
    </div>
  );
}

export default App;
