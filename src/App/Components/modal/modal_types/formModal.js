import React from 'react';
import {Input,Button} from '@material-ui/core';
import {View} from '../../../../Primitives';
import ModalSelector from '../modal_components/dropDown';
/*
const style = {
    root:{
        position: 'absolute',
    }
}
*/
export default function ModalForm({addTab,hideModal,modalInfo}){
    return(
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
                                    console.log(modalInfo);
                                    //hideModal(modalInfo);
                                }
                            }>
                            הוסף
                            </Button>
                        </View>
                    </View>
            </View>
    )
}

