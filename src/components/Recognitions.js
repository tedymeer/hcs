import React,{useState} from 'react';
import '../styles/recog.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const data=[
      {
          id:1,
          heading:"MAJELIS ULAMA INDONESIA",
          
          image:"https://halalcs.org/wp-content/uploads/2017/11/logo_halal_indonesia-150x150.jpg"
      },
            {
          id:2,
          heading:"GULF COOPERATION COUNCIL",
          image:"https://www.halalcs.org/wp-content/uploads/2017/06/700x9999.622CCB68-5056-B775-A2963358EBD4A362-featured_image-150x150.png",
      },
     {     
          id:3,
          heading:"MALAYSIA JAKIM",
         
          image:"https://halalcs.org/wp-content/uploads/2017/11/logo_halal_malaysia-150x150.jpg"
      },
      {
          id:4,
          heading:"MAJELIS UGAMA ISLAM SINGAPURA",
          image:"https://www.halalcs.org/wp-content/uploads/2017/11/logo_recognitions-150x150.jpg"
      },
       { 
          id:5,
          heading:"THE CENTRAL ISLAMIC COMMITTEE OF THAILAND",
         
          image:"https://www.halalcs.org/wp-content/uploads/2017/11/logo_halal_thailand-150x150.jpg",

      },
      

      {
          id:6,
          heading:"WORLD HALAL FOOD COUNCIL",
          image:"https://www.halalcs.org/wp-content/uploads/2017/11/logo_whfc-e1528396673397-150x150.jpg"
      }
  ]  

const Main = ()=>{
    const [content,setContent]=React.useState(data);
    
  return(

    <>
    


        <div class="section-head col-sm-12" style={{marginTop:"4rem"}}>
          <h4><span>OUR</span> RECOGNITIONS</h4>
          <p style={{paddingLeft:"3rem",paddingRight:"3rem"}}>Due to our high Halal Quality Standards, HCS  is a trusted and worldwide recognized certification body. We issue Halal certificates recognized by : LPPOM MUI (lndonesia) including flavors, JAKIM (Malaysia), MUIS (Singapore), CICOT (Thailand), UAE, Saudi Arabia , and other respected Halal authorities around the world.

This worldwide recognition is the guarantee of a global acceptance of the HCS’s Halal certified products.</p>
        </div>
       
        
       
     
      

<div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        
            {content.map((part)=>{
            const {id,heading,para,image}=part;
            return(
           
                 <div class="col-lg-4 col-sm-6">
          <div class="item2"> <span class="icon2 feature_box_col_one">
              <img src={image}/>
          </span>
            <h6>{heading}</h6>
                  </div>
        </div> 

        );
    })} 
        </div>
              </div>            
     </div> 
        </>
  );
}
export default Main;
