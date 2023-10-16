import React from 'react';
import './intro.css';
import bg from '../../assets/dp.png'
const Intro = () => {
  return (
    <section id="intro">
        <div className='introContent'>
            <span className="hello">Hello,</span>
            <span className='introtext'>I'm <span className='introName'>Ram Teja Manchala</span></span>
            <p className='introPara'><span className='my'>Im pursuing my Btech in Vasavi college of Engineering.<br/>My specilization is Computer Science Engineering.</span><br/><br/>As a tech enthusiast and computer science student, my career objective is to become <br/>a skilled software developer,
leveraging my expertise in Python and Java. I aim <br/>to contribute to innovative projects, enhance user experiences,
and ensure the reliability <br/>and security of software systems.</p>
        </div>
        <img src={bg} alt="Profile" className="bg" /> 
    </section>
  )
}

export default Intro
