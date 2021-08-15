import React from 'react'
import logo from '../assets/logo.png'
import flag1 from '../assets/br.svg'
import flag2 from '../assets/gr.svg'
import flag3 from '../assets/sp.svg'
import flag4 from '../assets/fr.svg'

import '../styles/footer.css'
function Footer() {
    return (
        <footer class="footer">
        <div class="l-footer">
        <h1>
        <img src={logo} alt="" style={{height:'2em',width:'3em'}}/></h1>
        <p>
        The Halal certification body in Switzerland operating in all Europe - Halal certificates for food, Cosmetics and Pharnaceuticals products</p>
        </div>
        <ul class="r-footer">
        <li>
          <h2>
        Home</h2>
        <ul class="box">
        <li><a href="#">Recognition</a></li>
        <li><a href="#">Process</a></li>
        <li><a href="#"> Contact</a></li>
       
        </ul>
        </li>
        <li>
          <h2>
        About US</h2>
        <ul class="box">
        <li><a href="#">References</a></li>
        <li><a href="#">Apply</a></li>
        <li><a href="#"> Terms of access</a></li>
       
        </ul>
        </li>
       
        <li>
          <h2>
        Languages</h2>
        <ul class="box">
        <li><a href="#"><img src={flag1} className="flag-style"/> English</a></li>
        <li><a href="#"><img src={flag2} className="flag-style"/> Deutsch</a></li>
        <li><a href="#"><img src={flag3} className="flag-style"/> Français</a></li>
        <li><a href="#"><img src={flag4} className="flag-style"/> Español</a></li>
        
        </ul>
        </li>
        </ul>
        <div class="b-footer">
        <p>
        Copyright © {new Date().getFullYear()} Halal Certification Services GmbH</p>
        </div>
        </footer>
        
    )
}

export default Footer
