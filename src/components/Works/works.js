import React from 'react';
import UIDesign from '../../assets/ecom.avif';
import WebDesign from '../../assets/smart.jpg';
import AppDesign from '../../assets/solar.jpg';
import './works.css';
const Works = () => {
  return (
    <section id='works'>
        <h2 className='workstitle'>My Projects</h2>
        <div className='skillBars'>
            <div className='skillBar'>
                <a href="https://github.com/Ramteja0035/Ecommerce_ram" target='blank'><img src={UIDesign} alt='UIDesign' className='skillBarImg'/></a>
                <div className='skillBarText'>
                    <h2>Ecommerce App</h2>
                    <p>A Full stack project that deals with online shopping.<br/> Used MERN Stack Technology includes MongoDB, Express Js, ReactJs, NodeJs.</p>
                </div>
            </div>
            <div className='skillBar'>
                <a href="https://github.com/Ramteja0035/smartWatch" target="blank"><img src={WebDesign} alt='WebDesig' className='skillBarImg'/></a>
                <div className='skillBarText'>
                    <h2>Smart Watch</h2>
                    <p>A project that deals with the operations of the smart watch.<br/>Used Python and python modules likes textblob, pip installer.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Sun Tracking System</h2>
                    <p>The primary goal of the project is to increase the energy yield of solar panels by efficiently tracking the
sun’s movement and adjusting their orientation to receive optimal sunlight.<br/>Used Arduino as microcontroller,LDR sensors,solar panels and servo motor.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Works
