import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Screens/modal_actions';
import ModalTemplate from './modal';

function Modals({modals,hideModal}) {
    const modalsToRender = modals.map((modalInfo,i) => <ModalTemplate index={i} hideModal={hideModal} modalInfo={modalInfo}/>)
    console.log(modals);
    return (
        <div>
            {modalsToRender}
        </div>
    )
}

const mapStateToProps = state => (
    {
        modals: state.modals.modals,
    }
)

const mapDispatchToProps = dispatch => (
    {
        hideModal: obj => dispatch(actions.hideModal(obj)),
    }
)


const ModalContainer = connect(mapStateToProps,mapDispatchToProps)(Modals);
export default ModalContainer;