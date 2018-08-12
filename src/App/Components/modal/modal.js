import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import * as actions from '../../Screens/modal_actions';

function ModalTemplate(props){
    return(
        <Modal open={true} onClose={() => props.hideModal(props.modalInfo)}  center>
            {props.modalInfo.content}
        </Modal>
    )
}
/*
const mapDispatchToProps = dispatch => (
    {
        hideModal: obj => dispatch(actions.hideModal(obj)),
    }
)

const ModalTemplate = connect(null,mapDispatchToProps)(Template);
*/
export default ModalTemplate;

