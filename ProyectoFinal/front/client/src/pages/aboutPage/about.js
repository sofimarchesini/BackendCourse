import React from 'react';
import './about.css' 

const AboutPage = () =>{
    return (
        <div className='about-cont container-fluid text-center'>
             <div className='fila-inicial-about row'></div>
            <div className='cont-square'>
                <div className=' row'>
                    <div className='about-text'>About us</div>
                </div>
                <div className='cont-text'>
                    <div className='text'>Online Finance Learning Academy (OFLA) was born from a simple yet important idea: That everyone, regardless of its geographical location or its socioeconomic situation, should be able to understand the vast and complex world of modern finance. At OFLA, we strive to bring to earth the complexities of the financial world to everyone’s hands, in the pursue to navigate it in the best way possible. As a result, we bring to everyone who is willing to put its skin in the game (as we have) the primal tools to achieve such a goal. Once embarked on the OFLA journey, you will be guided through thoroughly researched e-books and courses complying with the best sources on the market; and special one-no-ones with our dedicated team. Join the OFLA community NOW.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage;