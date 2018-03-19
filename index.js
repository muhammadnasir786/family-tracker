import { AppRegistry } from 'react-native';
import React from 'react'
import { Provider } from 'react-redux'
import App from './App';
import { store } from './src/store/index'
import Login from './src/login';
import { StackNavigator,TabNavigator} from 'react-navigation';
import SignUp from './src/signUp'
 const MainNav = TabNavigator({
    Login : {
        screen : Login
    },
    Register  : {
        screen : SignUp
    } ,
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







class MainApplication extends React.Component {
    // componentWillReceiveProps(nextPorps){
        // nextPorps.isLogin === true ? this.props.navigation.navigate('MainApplication') : null
        // }
        render(){
            // this.props.isLogin === true ? this.props.navigation.navigate('MainApplication') : null
        return (
            <Provider store={store}>
                <Nav/>
            </Provider>
        );
    }
}
AppRegistry.registerComponent('loginSignUpBoilerPlate', () => MainApplication);
