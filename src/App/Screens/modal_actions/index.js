import * as actionTypes from '../../../actionConstants';

export const showModal = (obj) => (
    {
        type:actionTypes.SHOW_MODAL,
        payload: obj
    }
);

export const hideModal = (obj) => (
    {
        type:actionTypes.HIDE_MODAL,
        payload: obj
    }
);