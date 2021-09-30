import React from 'react';
import imgPortrait from '../img/myProfile.jpg';
import '../styles/Intro.css';


const Intro = () => {
    return (
        <>
            <h1 className="section__ title section__title--intro">
                Hi, I am <strong> Meenakshi Sharma</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Graphic Designer</p>
            <img src={imgPortrait} alt="x" className="intro__img" />
        </>
    )

}

export default Intro;