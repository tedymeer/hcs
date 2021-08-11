
import Sidenav from './components/Sidenav'
import Sidenavbig from './components/Sidenavbig'
import Slider from './components/Slider'
import Test from './components/Test'
import {Switch,Route} from 'react-router-dom'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (


<div className="App">

    <Switch>
     
      <Route exact path="/hcs/">
        
        <div className="nav-parent-small" >
        <Sidenav/>
        </div>
        <div className="nav-parent-big">
        <Sidenavbig/>
        </div>
        
        <Slider/>
        <Test/>

      </Route>
     
      <Route exact path="/hcs/contact">
    <h1>contact</h1>
      </Route>
    </Switch>



    </div>
  );
}

export default App;
