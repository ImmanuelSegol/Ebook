import {connect} from 'react-redux';
import * as actions from '../actions';
import DisplayView from './DisplayView';

const mapStateToProps = state => (
    {
        viewState: state.catalogUi.tabToRender,
        books: state.mockData.ebooks,
        currentEbook: state.catalogUi.currentEbook,
    }
) 

const mapDispatchToProps = dispatch => ( 
    {
        setCurrentEbook: id => dispatch(actions.currentEbook(id)),
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(DisplayView);

