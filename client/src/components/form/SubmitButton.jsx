import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';


const SubmitButton = ({name,error}) => {
    
    const [disabled, setDisabled] = useState(false)
   
    useEffect(()=>{
        if(typeof error ===  "object"){
            setDisabled((Object.keys(error).length !== 0))
        }
        else{
            setDisabled(error)
        }

    },[error])
    useEffect(()=>{
        if(error){
            setDisabled(true)
        }
    },[])
   
    return (
        // button 
       <button type="submit" className={`btn ${disabled ? "btn-secondary " : "btn-primary"}`} disabled={disabled} >{name}</button>
    );
};


//prop type
SubmitButton.propTypes = {
    name : PropTypes.string.isRequired,
    error : PropTypes.any.isRequired
}

SubmitButton.defaultProps = {
    name : "Button Name",
    error : false
}

export default SubmitButton;