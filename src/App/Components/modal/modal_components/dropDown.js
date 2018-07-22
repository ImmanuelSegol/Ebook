import React from 'react';
import {Select,MenuItem,InputLabel} from '@material-ui/core';
import { View } from '../../../../Primitives';

const defaultStyle = {
    width:'200px',
    margin: '10px'
}

const ModalSelector = ({style,label,data,defaultVal}) => {
    let newStyle = defaultStyle;
    style !== undefined ? newStyle = {...newStyle,...style} : null;
    return(
        <View col> 
            <InputLabel style={{alignSelf: 'flex-end', marginRight:'15px'}}>{label}</InputLabel>
            <Select 
            value=""
            style={newStyle}
            >
                <MenuItem value="">{defaultVal}</MenuItem>
                {
                    data ? data.map(item => <MenuItem value={item.selectID}>{item.content}</MenuItem>) : null 
                }
            </Select>
        </View>
    )
}

export default ModalSelector;