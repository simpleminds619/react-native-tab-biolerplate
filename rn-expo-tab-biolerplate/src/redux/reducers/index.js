import reduxCornell from 'redux-cornell';
import {combineReducers} from 'redux';

const {selectors, actions, superReducer} = reduxCornell({
    initialState : {
        homeScreen:{
            loaded:false,
            data:[]
        }
        /**
         * Declare as many initial states as key value pair as 'homepage' 
         * which is specific to each component/screen
         */
    }
});

export {selectors, actions};

const rootReducer = combineReducers({superReducer});

export default rootReducer;