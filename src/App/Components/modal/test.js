import {connect} from 'react-redux';

function Modals(props) {
    const modals = props.modals.map()
}

const mapStateToProps = state => (
    {
        modals: state.modals,
    }
)

const mapDispatchToProps = dispatch => (
    {
        
    }
)


const modalContainer = connect()(Modals);
export default modalContainer;