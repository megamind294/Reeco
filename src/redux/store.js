import { createStore, combineReducers } from 'redux';
import productReducer from '../redux/reducers/productReducer'; // Import your product reducer
// Import other reducers if you have them

const rootReducer = combineReducers({
    productReducer, // Add other reducers here
});

const store = createStore(rootReducer);

export default store;
