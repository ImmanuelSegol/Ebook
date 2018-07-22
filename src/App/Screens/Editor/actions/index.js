import * as actionTypes from '../../../../actionConstants';
import moment from 'moment';

const cntrlSideBar = () => (
    {
        type: actionTypes.TOGGLE_SIDEBAR_EDITOR
    }
)

const renderMedia = (type,src) => (
    {
        type:actionTypes.RENDER_MEDIA,
        payload:{
            type,
            src,
        }
    }
)

const addEbookTab = () => (
    {
        type: actionTypes.ADD_BOOK_TAB,
        payload: {
            parentId:123,
            id: 1234777,
            title:'קורס חדש',
            date: moment().format('LL'),
            details:'כאן מופיע פירוט על המארז הלומדות והקורס',
            type:'aframe',
            link:'http://localhost:3000/media_content/SWF/sample.swf',
        }
    }
)



export {
    cntrlSideBar,
    renderMedia,
    addEbookTab,
}