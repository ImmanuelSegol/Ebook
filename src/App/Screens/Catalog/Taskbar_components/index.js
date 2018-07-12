import React from 'react';
import Text from '../../../../Primitives/Text';
import PropTypes from 'prop-types';

const Title = ({title}) => (
    <Text style={{fontSize: 32}}>{title}</Text>
);

Title.PropTypes = {
    title: PropTypes.string.isRequired,
}

export {
    Title,
}
