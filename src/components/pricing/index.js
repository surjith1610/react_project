import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";

const Pricing = () => {
const priceState = {
    prices:[100,150,200],
    position:['Balcon','Medium','Stage'],
    desc: [
        "No matter who is performing, there will almost always be a floor section. The floor is normally where a hockey or basketball game would be played during a sporting event. During a concert, the area is converted into seating. Since this area is not a permanent structure of the venue, it is also the most customizeable area and changes depending on the performer.",
        "If you're looking at the seats closest to the stage and experience sticker shock, you're not alone. The lowest priced tickets are almost always in the upper levels at arena shows. This is due to their distance from the stage. Don't let this make you think that it's impossible to have a great experience in these seats.",
        "For some shows, you will notice seats that are being sold on the side or behind the stage. Often times these will be associated with limited or obstructed views of the stage. The upside to these seats is that you can often get very close to the stage at a much lower price. However, there are several reasons for this. To start."
    ],
    linkto:['google.co.in','google.co.in','google.co.in'],
    delay:[500,0,500]
}

const showBoxes = () => (
    priceState.prices.map((box,index)=>(
        <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
            <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${priceState.prices[index]}</span>
                    <span>{priceState.position[index]}</span>
                </div>
                <div className="pricing_description">
                    {priceState.desc[index]}
                </div>
                <div className="pricing_buttons">
                    <MyButton
                        text="Purchase"
                        style={{
                            color:'#ffffff'
                        }} 
                        link={priceState.linkto[index]}
                    />
                </div>
            </div>
        </Zoom>
    ))
)


return(
    <div className="bck_black">
        <div className="center_wrapper pricing_section">
            <h2>Pricing</h2>

            <div className="pricing_wrapper">
                { showBoxes() }
            </div>
        </div>
    </div> 
)
}

export default Pricing;