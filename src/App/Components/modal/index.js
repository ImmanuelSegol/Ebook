import React from 'react';
import {View} from '../../../Primitives';
import Modal from '@material-ui/core/Modal';


export default function ModalForm({isOpen,onClose}){
    return(
        <Modal
            open={isOpen}
            onClose={onClose}
        >
            <View style={{width:'100px',height: '100px',top:'50%',right:'50%',transform: 'translate(-50%, -50%)',  position: 'absolute'}}>
                
            </View>
        </Modal>
    )
}