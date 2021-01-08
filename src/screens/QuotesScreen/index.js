import PushNotificationIOS from "@react-native-community/push-notification-ios";
var PushNotification = require("react-native-push-notification");
import { BaseScreen } from "../../components";
import React, { useRef, useEffect } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { models } from "../../models"
import { ListProduct } from "../../components"
import { Colors } from "../../configs"
import Icon from 'react-native-vector-icons/FontAwesome';
export default ListProductSceen = ({ navigation }) => {
  const backPressed = () => {
    console.log("back Press")
  }
  const searchPress = () => {
    console.log("Search Press")
  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Danh sach quote </Text>
    </SafeAreaView>

  );
}