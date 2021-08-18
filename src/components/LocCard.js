import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';

function LocCard(props) {
    return (
        <div className="col-md-4 px-4 my-2" >
    
        <div className="mt-3">
            <h5 className="mb-2" style={{fontWeight:"600"}}><a href="#" style={{color: "#00ba51",textDecoration:"none"}}>{props.cname}</a>
            </h5>
            <p>
               
               {props.phone1 && <PhoneForwardedIcon/>  }  {props.phone1} {props.phone1 && <br/>}
                
               {props.phone2 && <PhoneForwardedIcon/>  }  {props.phone2} {props.phone2 && <br/>}
               
                
                <EmailIcon/> {props.email}</p>
           

        </div>
    </div>
    )
}

export default LocCard
