
import '../styles/location.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailIcon from '@material-ui/icons/Email';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
function App() {
  return (
    <div >
      <div  className="main-box">
         <div className="row" >
            <div className="col-md-4"  >
                <div class="py-4">
                   
                    <h2 className="text-capitalize font-weight-bold my-3 "><span style={{color:"black",fontWeight:"bold",fontSize:"1.7rem"}}>OFFICE  </span>  <span style={{color: "darkslategray",fontSize:"1.7rem",textDecoration:"none",fontWeight:"bold"}}s>LOCATIONS</span>
                    </h2>
                    <p className="main-info" >Halal Certification Services certifies companies all
                        over the world. Our locally based auditors can support you in your local languages.
                        Find the contact details of our offices nearest to you.</p>
                </div>
            </div>


             <div className="col-md-8" >
    
                <div className="row">
                    <div className="col-md-4 px-4 my-2" >
    
                        <div className="mt-3">
                            <h5 className="mb-2" style={{fontWeight:"600"}}><a href="#" style={{color: "#00ba51",textDecoration:"none"}}>SWITZELAND</a>
                            </h5>
                            <p  ><PhoneForwardedIcon/>+ 41 61 813 30 64<br/><PhoneForwardedIcon/>+ 41 61 813 30 65<br/><EmailIcon/> info@halalcs.org</p>
                           
    
                        </div>
                    </div>
    
                    <div className="col-md-4 px-4 my-2" >
    
                        <div className="mt-3">
                           <h5 className="mb-2" style={{fontWeight:"600"}}><a href="#" style={{color: "#00ba51",textDecoration:"none"}}>GREECE</a>
                           </h5>
                            <p ><PhoneForwardedIcon/>+ 30 2310 474115<br/><PhoneForwardedIcon/>+ 30 2310 472984<br/><EmailIcon/> greece@halalcs.org</p>
                          
                        </div>
                    </div>
                    <div className="col-md-4 px-4 my-2">
                    
                        <div className="mt-3">
                           <h5 className="mb-2" style={{fontWeight: "600"}}><a href="#" style={{color: "#00ba51",textDecoration:"none"}}>FRANCE</a></h5>
                            
                            <p><PhoneForwardedIcon/>+ 33 6 99 42 23 18<br/><EmailIcon/> france@halalcs.org</p>
                    
                        </div>
                    </div>
                       
   
    <div className="col-md-4 px-4 my-2" >
    
        <div className="mt-3">
            <h5 className="mb-2" style={{fontWeight: "600"}}><a href="#" style={{color: "#00ba51",textDecoration:"none"}}>SPAIN/PORTUGAL</a></h5>
               
                    <p><PhoneForwardedIcon/>+ 34 692 59 50 40<br/><EmailIcon/> spain@halalcs.org</p>
    
        </div>
    </div>
                   
    
   <div className="col-md-4 px-4 my-2" >
    
        <div className="mt-3">
            <h5 className="mb-2" style={{fontWeight: "600"}}><a href="#" style={{color: "#00ba51",textDecoration:"none"}}>GERMANY</a></h5>
               
                    <p><EmailIcon/> info@halalcs.eu</p>
    
        </div>
    </div>
    
    
                  
                </div>
    
            </div>


         </div>
      </div>
    </div>
  );
}

export default App;
