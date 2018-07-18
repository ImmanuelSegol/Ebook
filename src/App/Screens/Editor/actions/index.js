import * as actionTypes from '../../../../actionConstants';

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

export {
    cntrlSideBar,
    renderMedia
}