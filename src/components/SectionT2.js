import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LanguageIcon from '@material-ui/icons/Language';
import '../styles/SectionT2.css'
import AssistantPhotoOutlinedIcon from '@material-ui/icons/AssistantPhotoOutlined';
import BeenhereIcon from '@material-ui/icons/Beenhere';
const styles = {

  largeIcon: {
    width: 60,
    height: 60,
  },

};
const SectionT2 = () => {
    return (
        <div>
            <section class="feature-section img-fluid">
        <div class="container">
            <div class="row">
                
            </div>
            <div class="row">
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                       <div className="show">
                           <LanguageIcon style={{height:"60px",width:"60px"}}/>
                       </div>
                        <h2 class="features-heading">A GLOBAL RECOGNITION</h2>
                        <p>
                            HCS is a member of the World Halal Food Council and is officially recognized from renowned bodies from around the world
                            such as LPPOM MUI (Indonesia), JAKIM (Malaysia) or MUIS (Singapore).
                        </p>
                       
                    </div>
                </div>
                
                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <div className="show">
                           <BeenhereIcon style={{height:"60px",width:"60px"}}/>
                       </div>
                        <h2 class="features-heading">A PROVEN PROCESS</h2>
                        <p>
                        Our Halal Assurance System (HAS), in line with ISO 17065, has been established to assist professionals to meet the Halal
                        requirements. This proven process assures Muslim consumers access to Halal products and services.
                        </p>
                         
                    </div>
                </div>

                <div class="col-md-4 feature-back">
                    <div class="features-div">
                        <div className="show">
                           <AssistantPhotoOutlinedIcon style={{height:"60px",width:"60px"}}/>
                       </div>
                        <h2 class="features-heading">3 DECADES OF EXPERTISE</h2>
                        <p>
                        Since 1987 HCS is supporting and providing high quality service made in Switzerland. We are happy to announce that our
                        German and Spanish offices are also now listed with MUI (Indonesia).
                        </p>
                      
                    </div>
                </div>
                
                
            </div>
        </div>
    </section>
        </div>
    )
}

export default SectionT2
