import React from 'react';
import {Input,Button,Select} from '@material-ui/core';
import {View} from '../../../Primitives';
import ModalSelector from '../../Components/modal/modal_components/dropDown'
import Modal from 'react-responsive-modal';

const style = {
    root:{
        position: 'absolute',
    }
}

export function ModalForm({isOpen,onClose,addTab}){
    return(
        <Modal open={isOpen} onClose={onClose} center>
               <View col>
                <h2 style={{alignSelf:'center'}}>הוסף לומדה חדשה</h2>
                    <View col style={{height:'auto',width:'auto'}}>
                        <View style={{justifyContent: 'space-around',margin:'25px'}}>
                            <Input
                                style={{direction: 'rtl',width: '200px',margin: '20px'}}
                                placeholder="נושא הלומדה"
                            />
                            <ModalSelector style={{width: '200px',margin:'20px'}}/>
                        </View>
                        <View style={{justifyContent: 'space-around',alignItems: 'center',margin:'25px'}}>
                            <ModalSelector  style={{width: '200px',margin:'20px'}}/>
                            <ModalSelector style={{width: '200px',margin:'20px'}}/>
                        </View>
                        <View>
                            <Button color='primary' variant='raised' onClick={
                                () => {
                                    addTab();
                                    onClose();
                                }
                            }>
                            הוסף
                            </Button>
                        </View>
                    </View>
            </View>
        </Modal>
    )
}

