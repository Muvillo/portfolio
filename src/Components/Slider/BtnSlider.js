import React from 'react'
import './Slider.css'
import leftArrow from './icon/btnLeft.svg'
import rightArrow from './icon/btnRight.svg'

export default function BtnSlider({direction, moveSlide}){
    return(
        <button className={direction === "next"? 'btn-slide next': "btn-slide prev"} onClick={moveSlide}>
            <img src={direction === "next"? rightArrow : leftArrow} alt='Arrow'></img>
        </button>
    )
}