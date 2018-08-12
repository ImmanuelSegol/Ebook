import React from 'react';
import {connect} from 'react-redux';
import {showModal,hideModal} from '../../Screens/modal_actions';
import ModalTemplate from './modal';

function Modals(props) {
    const modals = props.modals.map((item,i) => 
        <ModalTemplate/>
    )
    return modals;

}

const mapStateToProps = state => (
    {
        modals: state.modals,
    }
)

const mapDispatchToProps = dispatch => (
    {
        showModal: obj => dispatch(showModal(obj)),
        hideModal: obj => dispatch(hideModal(obj)),
    }
)


const ModalContainer = connect(mapStateToProps,mapDispatchToProps)(Modals);
export default ModalContainer;