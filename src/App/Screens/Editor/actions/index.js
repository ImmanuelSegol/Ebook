import * as actionTypes from '../../../../actionConstants';
import moment from 'moment';
import uuid from 'uuid/v1';

export const cntrlSideBar = () => (
    {
        type: actionTypes.TOGGLE_SIDEBAR_EDITOR
    }
)

export const renderMedia = (type,src) => (
    {
        type:actionTypes.RENDER_MEDIA,
        payload:{
            type,
            src,
        }
    }
)

export const addEbookTab = () => (
    {
        type: actionTypes.ADD_BOOK_TAB,
        payload: {
            parentId:123,
            id: uuid(),
            title:'קורס חדש',
            date: moment().format('LL'),
            details:'כאן מופיע פירוט על המארז הלומדות והקורס',
            type:'aframe',
            link:'http://localhost:3000/media_content/SWF/sample.swf',
        }
    }
)

export const removeEbookTab = (id) => (
    {
        type: actionTypes.REMOVE_BOOK_TAB,
        payload:id
    }
)

