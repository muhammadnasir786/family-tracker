

import { Observable } from 'rxjs'
import  AuthAction from "../actions/authAction";
import FTAction from "../actions/FTAction";

import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCvHYXcKCp9din8zSyPS8J9oLQ3t9DtOI8",
    authDomain: "family-tracker-4e017.firebaseapp.com",
    databaseURL: "https://family-tracker-4e017.firebaseio.com",
    projectId: "family-tracker-4e017",
    storageBucket: "",
    messagingSenderId: "635982839964"
  };
firebase.initializeApp(config);

const ref = firebase.database().ref('/');
const auth = firebase.auth();
// let userData ;

class AuthEpic {


    static addCircle = (action$) => {
        return action$.ofType(FTAction.ADD_CIRCLE)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    ref.child(`/users/${firebase.auth().currentUser.uid}/circle/`).push(payload).then(() => {
                        return { type: 'NULL' }
                    })
                )
            })
    }
    static addMember = (action$) => {
        return action$.ofType(FTAction.ADD_MEMBER)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    ref.child(`/users/${firebase.auth().currentUser.uid}/circle/${payload.circleKey}/member/`).push(payload.memberObj).then(() => {
                        return { type: 'NULL' }
                    })
                )
            })
    }
    static updateLocation = (action$) => {
        return action$.ofType(FTAction.UPDATE_LOCATION)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    ref.child(`/users/${firebase.auth().currentUser.uid}/location/`).set(payload).then(() => {
                        return { type: 'NULL' }
                    })
                )
            })
    }
    static accepted = (action$) => {
        return action$.ofType(FTAction.ACCEPTED)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(
                    ref.child(`/users/${firebase.auth().currentUser.uid}/circle/${payload.circleKey}/member/${payload.memberKey}/isAccepted/`).set(true).then(() => {
                        return { type: 'NULL' }
                    })
                )
            })
    }
    static getUsers = (action$) => {
        return action$.ofType(FTAction.GET_USERS)
            .switchMap(({ payload }) => {
                return new Observable((observer) => {
                    ref.child(`users/`).on('child_added', (s) => {
                        observer.next({
                            type: FTAction.GET_USER_ADD,
                            payload: {
                                key: s.key,
                                userDetails: s.val()
                            }
                        })
                    })
                    ref.child(`users/`).on('child_changed', (s) => {
                        observer.next({
                            type: FTAction.GET_USER_UPDATE,
                            payload: {
                                key: s.key,
                                userDetails: s.val()
                            }
                        })
                    })
                })
            })
    }


        static createUser = (action$)=>{
            let userCreated = false;
            return action$.ofType(AuthAction.CREATE_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.createUserWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        ref.child(`users/${res.uid}`).set(payload);
                        userCreated = true;
                        // Action Dispatch for reducer to state change , and component render for 
                        // login OK use flages and dispatch at the bottom .map((x)=>{})
                        alert('User Successfully Created');
                        
                    }).catch((err)=>{
                        console.log(err)
                        alert(err.message)
                        
                    })
                )
                .map((x)=>{
                    return userCreated ? AuthAction.createUserSuccessfully('Naisr') : { type : null}
                })
            })
        }
        static loginUser = (action$)=>{
            let authenticate = false;
            return action$.ofType(AuthAction.LOGIN_USER)
            .switchMap(({payload })=>{
                return Observable.fromPromise(
                    auth.signInWithEmailAndPassword(payload.email,payload.password)
                    .then((res)=>{
                        authenticate = true;
                        // localStorage.setItem('uid',res.uid)
                        // console.log(res.uid)
                        // send  userdata at the end for reducer
                        // ref.child(`users/${res.uid}/`).once('value',(s)=>{
                        //     console.log(s.val())
                        //     userData = s.val();
                        //     console.log(userData)
                        // });
                        return AuthAction.loginUserSuccessfully()
                    }).catch((err)=>{
                        alert(err.message)
                        return {type : null};
                    })
                )
                // .map((x)=>{
                //     return { type : AuthAction.LOGIN_USER_SUCCESSFULLY }
                //     // return   authenticate ? AuthAction.loginUserSuccessfully(userData) : {type : null}
                // })
            })
        }
}

export default AuthEpic;