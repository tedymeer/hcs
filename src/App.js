import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidenav from './components/Sidenav'
import Slider from './components/Slider';
import {Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
  
     
     


    <Switch>
      <Route exact path="/hcs/">
        <div className="nav-parent" >
        <Sidenav/>
        </div>

        <Slider/>
      </Route>
     
      <Route exact path="/hcs/contact">
    <h1>contact</h1>
      </Route>
    </Switch>



    </div>
  );
}

export default App;
