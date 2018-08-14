import * as actionTypes from '../../../../actionConstants';

export const toggleTab = id => (
    {
        type:actionTypes.TOGGLE_TAB_VIEWS,
        payload: id
    }
)


export const currentEbook = id => (
    {
        type:actionTypes.SET_CURRENT_EBOOK,
        payload: id
    }
)
