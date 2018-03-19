import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

//requiring all reducers
import AuthReducer from './reducers/authReducer';
import FTReducer from './reducers/FTReducer';

//requiring all epics
import AuthEpic from './epic/authEpic';

//combine epic
const rootEpic = combineEpics(
    AuthEpic.createUser,
    AuthEpic.loginUser,
    AuthEpic.addCircle,
    AuthEpic.updateLocation,
    AuthEpic.addMember,
    AuthEpic.accepted,
    AuthEpic.getUsers,
);
//combine reducers
const rootReducer = combineReducers({
    AuthReducer , FTReducer
})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store
export let store = createStoreWithMiddleware(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
});
