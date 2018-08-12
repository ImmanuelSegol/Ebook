import * as actionTypes from '../../../actionConstants';
/*
    {
        id:
        content: 
    }
*/
export const showModal = obj => {
    alert('show');
    return{
        type:actionTypes.SHOW_MODAL,
        payload: obj
    }
};

export const hideModal = obj => {
    alert('hide');
    return{
        type:actionTypes.HIDE_MODAL,
        payload: obj
    }
};


