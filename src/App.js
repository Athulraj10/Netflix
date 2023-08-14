import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/Navbar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {action,originals} from './urls'


import './App.css'
function App() {
  return (
    <div className="App">
      {/* <Trail/> */}
      
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix'/>
      <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}
export default App;
