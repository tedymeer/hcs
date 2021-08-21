import { useEffect ,useState, useContext } from 'react';
import axios from 'axios'
import {Switch,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import { UserProvider } from './UserContext'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  const [officelocations, setOfficeLocations] = useState('')
  
  
  useEffect(() => {
    
    // let officeLocSecUrl = process.env.REACT_SERVER_API_URL + "/office";
    // console.log(officeLocSecUrl)
    axios.get("https://halalcs.herokuapp.com/office/en")
        .then((response) => {console.log(response); setOfficeLocations(response.data)});

    
  },[]);


  return (


<div className="App">
   {/* <div className="top-headline">
    This is the top headline
   </div> */}
    <UserProvider value={officelocations}>
    
    <Switch>
     
      <Route exact path="/">
     <Homepage/>
     
      </Route>
     
      <Route exact path="/contact">
        <h1>hello</h1>
      </Route>
    </Switch>


    </UserProvider>
    </div>
  );
}

export default App;
