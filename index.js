import { AppRegistry } from 'react-native';
import React from 'react'
import { Provider } from 'react-redux'
import App from './App';
import { store } from './src/store/index'
import Login from './src/login';
import { StackNavigator,TabNavigator ,SwitchNavigator} from 'react-navigation';
import SignUp from './src/signUp'
// import { StackNavigator,  } from 'react-navigation';
import AuthLoadingScreen from './src/authLoading'
import MyCircle from "./src/container/mycircle";
import RequestList from "./src/container/requestList";
import AddCircle from "./src/container/addCircle";
import Circle from "./src/container/circle";
import AddMember from "./src/container/addmember";
import Setting from "./src/container/setting";

 const OneCircle = StackNavigator({
     One :{
         screen : TabNavigator({
            Members : {
                screen : Circle
            },
            AddMember : {
                screen : AddMember ,
            }
         })
     }
 })
 const MainNav = TabNavigator({
    MyCircle : {
        screen : MyCircle
    },
    Requests  : {
        screen : RequestList
    } ,
    Create_Circle : {
        screen : AddCircle
    } , 
    Circle : {
        screen : OneCircle
    },
    Setting : {
        screen : Setting
    }
 }, {
     initialRouteName : 'MyCircle'
 })
const Nav = StackNavigator({
    Login : {
        screen : Login
    },
    Register  : {
        screen : SignUp
    } ,
    MainApplication : {
        screen : MainNav
    }
})

const Root =  SwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainNav,
      Auth: Nav,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  );






class MainApplication extends React.Component {
    componentWillReceiveProps(nextPorps){
        // nextPorps.isLogin === true ? this.props.navigation.navigate('MainApplication') : null
        }
        render(){
            // this.props.isLogin === true ? this.props.navigation.navigate('MainApplication') : null
        return (
            <Provider store={store}>
                <Root/>
            </Provider>
        );
    }
}
AppRegistry.registerComponent('loginSignUpBoilerPlate', () => MainApplication);
