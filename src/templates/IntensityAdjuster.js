// Imports
import { useState } from 'react';
import Slider from 'react-input-slider';

// Assets
import LightbulbOff from "../assets/lightbulb_off.png"
import LightbulbOn from "../assets/lightbulb_on.png"
import LightbulbActive from "../assets/lightbulb_active.png"

// Components
import ContainerHeading from "../components/ContainerHeading"
import Icon from "../components/Icon"

const IntensityAdjuster = () => {

    const [state, setState] = useState({x: 0});

    return (
        <div className="Intensity-adjuster w-full">
            <ContainerHeading text="Intensity" />
            <section className="Intensity-adjuster__section w-full grid items-end gap-x-5" style={{gridTemplateColumns: "18px 1fr 18px"}}>
                <figure className="Intensity-adjuster__figure" style={{height: "22px"}}>
                    <Icon src={LightbulbOff} alt="lightbulb off" />
                </figure>          
                <section className="Intensity-adjuster__slider flex flex-col gap-3">
                    <Slider
                    axis="x"
                    x={state.x}
                    xmax={1}
                    xmin={0}
                    xstep={0.2}
                    onChange={({x}) => setState(state => ({...state, x}))}
                    styles={{
                        track: {
                            width: "100%",
                            height: "1px",
                            backgroundColor: '#CECECE',
                        },
                        active: {
                            backgroundColor: '#FFD339',
                        },
                        thumb: {
                            width: 14,
                            height: 14,
                        },
                    }}/>
                    <ul className="Intensity-meter__list flex justify-between">
                        <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                        <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                        <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                        <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                        <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                        <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                    </ul>
                </section>
                <figure className="Intensity-adjuster__figure grid" style={{height: "28px"}}>
                    <div className="Intensity-adjuster__icon col-start-1 col-end-1 row-start-1 row-end-2" style={{opacity: 1 - state.x}}>
                        <Icon src={LightbulbOn} alt="lightbulb o" />
                    </div>
                    <div className="Intensity-adjuster__icon col-start-1 col-end-1 row-start-1 row-end-2" style={{opacity: state.x}}>
                        <Icon src={LightbulbActive} alt="lightbulb active" />
                    </div>
                </figure>
            </section>
        </div>
    );
}
 
export default IntensityAdjuster;