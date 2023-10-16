import React from 'react';
import "./contact.css";
import Walmart from '../../assets/uts.jpeg';
import Adobe from '../../assets/code.jpeg';
import FacebookIcon from '../../assets/git.png';
import TwitterIcon from '../../assets/link.png';
const Contact = () => {
    return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">Work Experience</h1>
            <p className="clientDesc">
                I worked as a Project Intern in Uni String Tech and as a Campus Ambassador in Coding Ninjas
            </p>
            <div className='clientImgs'>
                <img src={Walmart} alt="Client" className='clientImg'/>
                <img src={Adobe} alt="Client" className='clientImg'/>
            </div>
        </div>
        <div id="contact">
            <h1 className='contactPageTitle'>Contact Me</h1>
            <div>
                <h2>My Name: Ram Teja Manchala</h2>
                <h2>Email: ramtejamanchala123@gmail.com</h2>
                <h2>My Phone: 9347833010</h2>
            </div>
            <div className='links'>
                    < a href="https://github.com/Ramteja0035" alt="https://github.com/Ramteja0035" target='blank'><img src={FacebookIcon} alt='Github' className='link'/></a>
                    <a href="https://www.linkedin.com/in/ram-teja-b4a64822a/" alt ="https://www.linkedin.com/in/ram-teja-b4a64822a/" target='blank'><img src={TwitterIcon} alt='LinkedIn' className='link'/></a>
            </div>
        </div>
    </section>
  )
}

export default Contact
