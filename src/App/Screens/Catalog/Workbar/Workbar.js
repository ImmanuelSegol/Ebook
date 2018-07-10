import React from 'react';
import styles from './style';
import View from '../../../../Primitives/View';
import Text from '../../../../Primitives/Text';
import {Tabs,Tab} from '@material-ui/core/';

export default class Workbar extends React.Component{
    state = {
        value:0,
    }
    onChange = this.onChange.bind(this);
    onChange(event, value){
        this.setState({value});
        this.props.toggleTabs(value);
        //alert(value);
    }
    render(){
        //const {toggleTabs} = this.props;
        return(
            <View style={styles.root}>
                <Tabs value={this.state.value} style={styles.tabViews} onChange={this.onChange}>
                    <Tab label={<Text>מארזים ששותפו איתי</Text>} />
                    <Tab label={<Text>מארזים משותפים</Text>}/>
                    <Tab label={<Text>מארזים שלי</Text>} />
              </Tabs>
            </View>
        )
    }
}