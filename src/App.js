import {Switch,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (


<div className="App">

    <Switch>
     
      <Route exact path="/">
     <Homepage/>
      </Route>
     
      <Route exact path="/contact">
      </Route>
    </Switch>



    </div>
  );
}

export default App;
