import * as actionTypes from '../../../actionConstants';
/*
    {
        id:
        content: 
    }
*/
export const showModal = obj => {
    return{
        type:actionTypes.SHOW_MODAL,
        payload: obj
    }
};

export const hideModal = obj => {
    return{
        type:actionTypes.HIDE_MODAL,
        payload: obj
    }
};


