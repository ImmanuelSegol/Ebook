import React from 'react';
import {Paper,IconButton} from '@material-ui/core';
import {View} from '../../../../Primitives';
import {ClearAll,Add,Save,SupervisorAccount} from '@material-ui/icons';
import FormModal from '../../../Components/modal/modal_types/formModal';
import ModalContainer from '../../../Components/modal';


const style = {
    margin: '5px',
};

const Button = ({icon,onClick}) => (
    <IconButton style={style} onClick={onClick}>
        {icon}
    </IconButton>
)

export default class OptionCards extends React.Component{
        render(){
            const {showModal,addTab,hideModal,modalInfo} = this.props;
            return(
                <View noFlex color='none'>
                    <Paper style={{ width: 'auto',margin:15,display: 'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <Button icon={<SupervisorAccount/>}/>
                    <Button icon={<Save/>}/>
                    <Button icon={<Add/>} onClick={() => showModal({
                        id:1,
                        content: <FormModal addTab={addTab} hideModal={hideModal} modalInfo={modalInfo}/>
                    })}/>
                    <Button icon={<ClearAll/>}/>
                    </Paper>
                   {/*<ModalForm isOpen={this.state.isOpen} onClose={this.closeModal} addTab={this.props.addTab}/>*/}
                   <ModalContainer/>
                </View>
            )
        }
}


/*
export default function OptionCards(params) {
    return(
        <View noFlex color='none'>
            <Paper style={{ width: 'auto',margin:15,display: 'flex',justifyContent:'space-around',alignItems:'center'}}>
            <Button icon={<SupervisorAccount/>}/>
            <Button icon={<Save/>}/>
            <Button icon={<Add/>}/>
            <Button icon={<ClearAll/>}/>
            </Paper>
        </View>
    );
}
*/