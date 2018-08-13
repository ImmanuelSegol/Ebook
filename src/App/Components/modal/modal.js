import React from 'react';
import Modal from 'react-responsive-modal';


function ModalTemplate(props){
    return(
        <Modal open={true} onClose={() => props.hideModal(props.modalInfo)}  center>
            {props.modalInfo.content}
        </Modal>
    )
}

export default ModalTemplate;

