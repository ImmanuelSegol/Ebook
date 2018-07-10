import * as actionTypes from '../../../../actionConstants';

export const toggleTab = id => (
    {
        type:actionTypes.TOGGLE_TAB_VIEWS,
        payload: id
    }
)

