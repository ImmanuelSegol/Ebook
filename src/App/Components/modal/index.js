import React from 'react';
import {View} from '../../../Primitives';
import Modal from 'react-responsive-modal';

const style = {
    root:{
        position: 'absolute',
    }
}

export default function ModalForm({isOpen,onClose}){
    return(
        <Modal open={isOpen} onClose={onClose} center>
            <h2>Hello</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
    )
}