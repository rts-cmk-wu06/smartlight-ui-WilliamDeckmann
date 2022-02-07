const IntensityMeter = () => {
    return (
        <div className="Intensity-meter">
            <section className="Intensity-meter__section mb-1 grid grid-cols-2 items-center">
                <div className="Intensity-meter__active-meter col-start-1 col-end-2 row-start-1 row-end-2 bg-intensitySelector-activeMeter" style={{height: "2px"}}></div>
                <div className="Intensity-meter__off-meter col-start-2 col-end-3 row-start-1 row-end-2 bg-intensitySelector-offMeter" style={{height: "2px"}}></div>
                <button className=" h-4 w-4 rounded-full col-start-1 col-end-3 row-start-1 row-end-2 justify-self-center bg-intensitySelector-adjuster"></button>
            </section>
            <ul className="Intensity-meter__list flex justify-between">
                <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
                <li className="Intensity-meter__item h-1 bg-intensitySelector-setting" style={{width: "1px"}} ></li>
            </ul>
        </div>
    );
}
 
export default IntensityMeter;