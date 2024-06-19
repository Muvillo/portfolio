import Button from './buttonPortfolio'
import Slider from '../Slider/slider'
import dataSliderSites from '../../data/dataSliderSites'
import dataSliderFigma from '../../data/dataSliderFigma'
import dataSliderPS from '../../data/dataSliderPS'

export default function Portfolio(){
    return(
        <div id='project'>
            <div className="portfolio">
                <span className="btnGit">
                <Button name={"Git аккаунт"}></Button>
                </span>
                <p className="titlePortfolio">Проекты</p>
            </div>

            <div className="mainContainerPortfolio">
                <Slider dataSlider={dataSliderSites}></Slider>
                <Slider dataSlider={dataSliderFigma}></Slider>
                <Slider dataSlider={dataSliderPS}></Slider>
            </div>
        </div>
    )
}