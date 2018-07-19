import React from 'react';
import {Paper,IconButton, Icon} from '@material-ui/core';
import {View} from '../../../../Primitives';
import {ClearAll,Add,Save,SupervisorAccount} from '@material-ui/icons';
import Modal from '../../../Components/modal';
const style = {
    margin: '5px',
};

const Button = ({icon,onClick}) => (
    <IconButton style={style} onClick={onClick}>
        {icon}
    </IconButton>
)

export default class OptionCards extends React.Component{
        state = {
            isOpen:false,
        }
        openModal = this.openModal.bind(this);
        closeModal = this.closeModal.bind(this);
        openModal(){
            this.setState({isOpen:true});
        }
        closeModal(){
            this.setState({isOpen:false});
        }
        render(){
            return(
                <View noFlex color='none'>
                    <Paper style={{ width: 'auto',margin:15,display: 'flex',justifyContent:'space-around',alignItems:'center'}}>
                    <Button icon={<SupervisorAccount/>}/>
                    <Button icon={<Save/>}/>
                    <Button icon={<Add/>} onClick={this.openModal}/>
                    <Button icon={<ClearAll/>}/>
                    </Paper>
                    <Modal isOpen={this.state.isOpen} onClose={this.closeModal}/>
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