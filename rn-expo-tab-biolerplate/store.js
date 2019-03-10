import {applyMiddleware, createStore} from 'redux';
import rootReducer from './src/redux/reducers';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    return store;
};

export default configureStore;