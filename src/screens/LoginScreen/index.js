import React, { Component } from "react";
import styles from "./styles";
import {
  Text, View, TouchableOpacity, Alert, KeyboardAvoidingView,
  ActivityIndicator, TextInput,SafeAreaView
} from "react-native";
import { connect } from "react-redux"
import { BaseScreen } from "../../components"
import { login } from "../../actions";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { commonsConfigs as configs } from '../../configs'
import { models } from "../../models";
import messaging from '@react-native-firebase/messaging';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };

  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.top}>

        </View>
        <View style={styles.body}>

          <View style={styles.formLogin}>
            <View style={styles.coverTile}>
              <Text style={styles.loginText}>Login</Text>
              <Text style={styles.loginTextUnder}>Please login to continue</Text>
            </View>
            <View style={styles.coverInput}>

              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                placeholder="Phone"
                value={this.state.userName}
                keyboardType={'numeric'}
                onChangeText={value =>
                  this.handleChangeInput("userName", value)
                }
              />

              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                secureTextEntry={true}
                placeholder="Password"
                value={this.state.password}
                onChangeText={value =>
                  this.handleChangeInput("password", value)
                }
              />
            </View>

            <View style={styles.coverButton}>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleLogin}
              >
                <Text
                  style={styles.text_Button}>
                  Login
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textFooter}>
            Don't have a account ?{" "}
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              this.props.navigation.navigate("Register");
            }}
          >
            <Text style={styles.textRegister}>Register now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  handleLogin = async () => {
    // let fcmToken = await models.getFCMToken()
    let fcmToken = await messaging().getToken();
    console.log(fcmToken, "fcmToken login")
    this.props.dispatchLogin({
      username: this.state.userName,
      password: this.state.password,
      device: configs.DEVICE_NAME._W,
      fcmToken: fcmToken ? fcmToken : "empty"
    })
  }
  handleChangeInput = (name, value) => {
    this.setState({
      [name]: value
    })
  }
}

const mapStateToProps = state => ({
  count: state.countReducer ? state.countReducer : 0
})

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogin: (params) => dispatch(login(params)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)