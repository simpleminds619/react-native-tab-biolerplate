import {selectors, actions} from '../../redux/reducers';
import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';
import { bindActionCreators } from 'redux';

const mapStoreToProps = (state) => {
    return{
        isLoading: selectors.getHomeScreenLoaded(state)
    }
};

const mapActionsToProps = dispatch => bindActionCreators({
    toggleHomeScreenLoad : actions.toggleHomeScreenLoaded
}, dispatch);

export default connect(mapStoreToProps, mapActionsToProps)(HomeScreen);