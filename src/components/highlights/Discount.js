import React,{ useState, useEffect } from 'react';
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton';


const Discount = () => {
    const end = 20;
    const [start,setStart] = useState(0);

    const percentage = () => {
        if(start < end){
            setStart(prevCount => prevCount+1)
        }   
    }

    useEffect(()=>{
        if( start > 0 && start < 20){
            setTimeout(()=>{
                setStart(prevCount => prevCount+1)
            },30)
        }
    },[start])
    

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                 
                <Fade
                    onVisibilityChange={ (inView) => {
                        if(inView){
                            percentage()
                        }
                    }}
                >
                    <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                    </div>  
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase Your Tickets before October 10th</h3>
                        <p>
                        A. R. Rahman Jai Ho Concert: The Journey Home World Tour:  The Journey Home World Tour is 
                        the first world tour by Indian musician A. R. Rahman. Rahman organised the 
                        tour in 2010, following the success of his
                        soundtrack album Slumdog Millionaire, and particularly the song "Jaiho".
                        </p>
                        <MyButton
                            text="Purchase tickets"
                            link="http://google.com"
                            size="small"
                            />
                        </div>

                </Slide>

            </div>
        </div>
)
}

export default Discount