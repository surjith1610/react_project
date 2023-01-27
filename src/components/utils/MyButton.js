import React from "react";
import Button from '@mui/material/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props) => {
    return(
        <Button
            href={props.link}
            variant="contained"
            size={props.size?props.size:'large'}
            
        >
            <img 
                src={TicketIcon}
                className="iconImage"
                alt="icon_button"
                />
            {props.text}
        </Button>
    )
}

export default MyButton