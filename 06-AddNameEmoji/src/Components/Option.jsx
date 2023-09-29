import React from 'react'

function Option(props){
    /*----------------I put the options here----------------*/
    return(
        <option value={props.value}>{props.labelOption}</option>
    )
}

export default Option