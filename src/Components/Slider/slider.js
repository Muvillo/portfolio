import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'

export default function Slider({dataSlider}){
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () =>{
        if(slideIndex !== dataSlider.content.length){
            setSlideIndex(slideIndex + 1)
        }else if (slideIndex === dataSlider.content.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if(slideIndex === 1){
            setSlideIndex(dataSlider.content.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    return(
        <div className='containerSliderBtn'>  
            <p className='titleContent'>{dataSlider.title}</p>   
            <div className='container-slider'>
                {dataSlider.content.map((obj, index) =>{
                    return(
                        <div className={slideIndex === index + 1 ? "slide active-anim": "slide"} key={obj.id}>
                            <img src={process.env.PUBLIC_URL + `/images/${dataSlider.img}${index+1}.png`} alt='Скриншоты'></img>
                            <div className='description'>
                                <p>{obj.description}</p>
                                <p>{obj.stack}</p>
                            </div>
                            <div className='positionBtn'>
                                {obj.btnContent.map((btn)=>{
                                    return(
                                    <a href={btn.urlbtn} className={slideIndex === index +1 ? "block":"none"} key={btn.urlbtn}><button className='btnsContent btnPortfolio'>{btn.namebtn}</button></a>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}

                <div className='container-dots'>
                    {Array.from({length: 5}).map((item, index)=>(
                        <div className={slideIndex === index +1 ? "dot active": "dot"} onClick={()=> moveDot(index + 1)} key={index}> </div>
                    ))}
                </div>
                <BtnSlider moveSlide={nextSlide} direction={"next"}></BtnSlider>
                <BtnSlider moveSlide={prevSlide} direction={"prev"}></BtnSlider>
            </div>
        </div>
    ) 
} 