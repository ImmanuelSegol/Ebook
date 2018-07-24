import React from 'react';
import Text from '../../../../Primitives/Text';
import {Button,IconButton} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import X from '@material-ui/icons/Close';
import PropTypes from 'prop-types';

const ShareButton = ({title}) => (
    <Button color='inherit'><Text>{title}</Text></Button>
);

const Title = ({title}) => (
    <Text style={{fontSize: 32}}>{title}</Text>
);

const ToggleMenu = ({onClick,showSideBar}) => (
    <IconButton color='inherit' onClick={() => onClick()}>
                {
                    showSideBar ? <X/> : <Menu/>
                }
    </IconButton>
);

ShareButton.propTypes = {
    title: PropTypes.string.isRequired,
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

ToggleMenu.propTypes = {
    onClick: PropTypes.func.isRequired,
    showSideBar: PropTypes.bool.isRequired,
}

export {
    ShareButton,
    Title,
    ToggleMenu
}