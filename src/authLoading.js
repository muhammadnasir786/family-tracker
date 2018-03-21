import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import * as firbase from 'firebase'
import { connect } from 'react-redux';
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // AsyncStorage.setItem('uid','asd')
    // AsyncStorage.clear();
    const userToken = await AsyncStorage.getItem('uid');
    // alert(userToken)
    // const userToken  = await firebase.auth().currentUser === null ? false : true;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken || this.props.isLogin ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  // Nasir
  render() {
    return (
      <View style={styles.container}>
       <ActivityIndicator size={100} color="green" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container :{
        justifyContent : 'center',
        alignItems : 'center'
    }
})
let mapStateToProps = (state)=>{
 return {
    isLogin : state.AuthReducer.isLogin
 }  
}
export default connect(mapStateToProps)(AuthLoadingScreen);
