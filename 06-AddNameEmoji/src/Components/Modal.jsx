import React from "react";

const Modal = ({children }) =>{
    /*-----------------The component modal -----------------*/
    return(
        <div className='modal-container'>
            <div className='modal'>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    )   
}
export default Modal