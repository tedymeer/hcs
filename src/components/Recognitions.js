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
            
            <RecCard pic={pic1} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>

            <RecCard pic={pic2} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>

            <RecCard pic={pic3} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>

            <RecCard pic={pic4} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>

            <RecCard pic={pic5} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>

            <RecCard pic={pic6} name="MAJELIS ULAMA INDONESIA" caption=" LPPOM MUI  is the Indonesian authority of agreement and Halal Certification.
            Halal Certification Services (HCS) is a Halal certification body recognized by LPPOM MUI."/>


        </div>
    )
}

export default Recognitions;
