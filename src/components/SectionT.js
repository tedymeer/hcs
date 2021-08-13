import React from 'react'
import SectionComponent from './SectionComponent'
import '../styles/sectionT.css'
function SectionT() {
    return (
        <div className="sectionT-wrap">
           <SectionComponent heading="A GLOBAL RECOGNITION" para="HCS is a member of the World Halal Food Council and is officially recognized from renowned bodies from around the world such as LPPOM MUI (Indonesia), JAKIM (Malaysia) or MUIS (Singapore)."/>
           <SectionComponent heading="3 DECADES OF EXPERTISE" para="Since 1987 HCS is supporting and providing high quality service made in Switzerland. We are happy to announce that our German and Spanish offices are also now listed with MUI (Indonesia). "/>
           <SectionComponent heading="A PROVEN PROCESS" para="Our Halal Assurance System (HAS), in line with ISO 17065, has been established to assist professionals to meet the Halal requirements. This proven process assures Muslim consumers access to Halal products and services."/>
           <SectionComponent heading="WHAT DOES HALAL MEAN?" para="Halal is an Arabic term designating any object or an action which is permissible to use or engage in, according to the Islamic law. The term is widely used to designate food..."/>
        </div>
    )
}

export default SectionT
