import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Programming Languages</h2>
                    <p>C, Python, Java, C++</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesig' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Core Software</h2>
                    <p>Data Structures, Design and Analysis of Algorithms.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Other</h2>
                    <p>HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, MySQL.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
