import React from 'react';
import '../styles/recog.css'

import pic1 from '../assets/rec-11.jpg'
import pic2 from '../assets/rec-22.jpg'
import pic3 from '../assets/rec-33.jpg'
import pic4 from '../assets/rec-44.jpg'
import pic5 from '../assets/rec-55.png'
import pic6 from '../assets/rec-66.jpg'

import RecCard from './RecCard';
function Recognitions() {
    return (
        <div className="rec-wrap">
            
            <div className="recog-heading">RECOGNIZED BY</div>
            <div className="g-wrap">
            <RecCard pic={pic1} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>

            <RecCard pic={pic2} name="MALAYSIA JAKIM" caption="Halal Certification Services (HCS) is a certification body recognized by JAKIM to 
            insure the Halal status of products prior to import into Malaysia."/>

            <RecCard pic={pic3} name="THE CENTRAL ISLAMIC COMMITTEE OF THAILAND" caption="The CICOT, Central Islamic Council of Thailand, recognizes
             HCS Halal certificates."/>

            <RecCard pic={pic4} name="MAJELIS UGAMA ISLAM SINGAPURA" caption="The Majlis Ugama Islam Singapura (Muis) also known as the Islamic Religious
             Council of Singapore recognizes the Halal certificates issued by Halal Certification Services (HCS).
             The Muis is responsible for the promotion of religious, social, educational, economic and cultural activities 
             in accordance with the principles and traditions of Islam as enshrined in the Holy Quran and Sunnah.
             "/>

            <RecCard pic={pic5} name="GULF COOPERATION COUNCIL" caption="We issue certificates accepted in Saudi Arabia, Bahrain, the United Arab 
            Emirates, Kuwait, Oman and other middle east countries."/>

            <RecCard pic={pic6} name="WORLD HALAL FOOD COUNCIL" caption="Halal Certification Services (HCS) is an active member of the WHFC (World Halal Food Council). 
            Established in 1999 the WHFC actively  works to ensure the interest and respect of Muslim consumer values."/>


</div>
        </div>
    )
}

export default Recognitions;
