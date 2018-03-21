class FTAction {

    //----------- for EPics -----------
    static GET_USERS = 'GET_USERS';
    static ACCEPTED = 'ACCEPTED';
    static ADD_MEMBER = 'ADD_MEMBER';
    static ADD_CIRCLE = 'ADD_CIRCLE';
    static UPDATE_LOCATION = 'UPDATE_LOCATION';

    //----------- for Reducer -----------
    static GET_USER_ADD = 'GET_USER_ADD';
    static GET_USER_UPDATE = 'GET_USER_UPDATE';

    static getUsers = () => {
        return { type: FTAction.GET_USERS }
    }
    static accepted = (data) => {
        return {
            type: FTAction.ACCEPTED,
            payload: data
        }
    }
    static addMember = (data) => {
        return {
            type: FTAction.ADD_MEMBER,
            payload: data
        }
    }
    static addCircle = (data) => {
        return {
            type: FTAction.ADD_CIRCLE,
            payload: data
        }
    }
    static updateLocation = (data) => {
        return {
            type: FTAction.UPDATE_LOCATION,
            payload: data
        }
    }
    static getUserUpdate = (data) => {
        return {
            type: FTAction.GET_USER_UPDATE,
            payload: data
        }
    }

}

export default FTAction;