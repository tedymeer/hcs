import {useContext,useState} from 'react'
import EmailIcon from '@material-ui/icons/Email';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import UserContext from '../UserContext'

import '../styles/location.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LocCard from './LocCard';


function Location() {
    const locations = useContext(UserContext)
    const [loc, setloc] = useState(locations.data)

  return (

    <div className="loc-section">
      <div  className="main-box">
         <div className="row" >
            <div className="col-md-4"  >
                <div class="py-4">
                   
                    <h2 className="text-capitalize font-weight-bold my-3 ">
<span style={{color:"white",fontWeight:"bold",fontSize:"1.7rem"}}>OFFICE  </span>  <span style={{color: "#00ba51",fontSize:"1.7rem",textDecoration:"none",fontWeight:"bold"}}s>LOCATIONS</span>
                    </h2>
                    <p className="main-info" >
                        {console.log(locations.data)}
                     {locations.data?.description}
                    </p>
                </div>
            </div>


             <div className="col-md-8" >
    
                <div className="row">
                    
    
                    <LocCard cname={locations.data?.location[0]?.name}
                     phone1={locations.data?.location[0]?.contacts[0]}
                     phone2={locations.data?.location[0]?.contacts[1]} 
                     email={locations.data?.location[0]?.contacts[2]}/>
       
                    <LocCard cname={locations.data?.location[1]?.name}
                     phone1={locations.data?.location[1]?.contacts[0]}
                     email={locations.data?.location[1]?.contacts[1]}/>

                    <LocCard cname={locations.data?.location[2]?.name}
                     email={locations.data?.location[2]?.contacts[0]}/>
           
                    <LocCard cname={locations.data?.location[3]?.name}
                     phone1={locations.data?.location[3]?.contacts[0]}
                     email={locations.data?.location[3]?.contacts[1]}/>
     
                    <LocCard cname={locations.data?.location[4]?.name}
                     phone1={locations.data?.location[4]?.contacts[0]}
                     phone2={locations.data?.location[4]?.contacts[1]} 
                     email={locations.data?.location[4]?.contacts[2]}/>
     
                   
     
                   
                   
    
    
                  
                </div>
    
            </div>


         </div>
      </div>
    </div>
  );
}

export default Location;
