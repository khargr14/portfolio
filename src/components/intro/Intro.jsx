import React from 'react'
import "./intro.css"
import ME from "../../img/Me.png"

const Intro = () => {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is </h2>
                    <h1 className='i-name'>Keesha Hargrove</h1>
                    <div className='i-title'>
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> Web Developer </div>
                            <div className="i-title-item"> Web Developer 2 </div>
                            <div className="i-title-item"> Web Developer 3</div>
                            <div className="i-title-item"> Web Developer 4</div>
                            <div className="i-title-item"> Web Developer 5</div>
                            <div className="i-title-item"> Web Developer 6</div>
                            
                        </div>
                    </div>
                    <p className='i-desc'>
                        write out desc..........
                    </p>
                </div>
                <svg>
                    
                </svg>
            </div>
            <div className='i-right'> 
                <div className='i-bg'></div>
                <img src={ ME} alt='' className='i-img' />
            </div>

        </div>

    );
};

export default Intro
