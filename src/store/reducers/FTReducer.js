import FTAction from "../actions/FTAction";

let FT_STATE = {
    users: {}
}

let FTReducer = (state = FT_STATE, action) => {
    switch (action.type) {
        case FTAction.GET_USER_ADD:
            let users = Object.assign({}, state.users);
            users[action.payload.key] = action.payload.userDetails;
            return { ...state, users: users }
        case FTAction.GET_USER_UPDATE:
            let userss = Object.assign({}, state.users);
            userss[action.payload.key] = action.payload.userDetails;
            return { ...state, users: userss }
        default:
            return state;
    }
}
export default FTReducer;