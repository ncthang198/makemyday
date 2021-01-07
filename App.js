import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text, ActivityIndicator
} from 'react-native';
const PushNotification = require("react-native-push-notification");
import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [quoteToday, setQuoteToday] = useState();
  useEffect(() => {
    checkPermission()
    createListenerMessage();
    getQuoteToday();
  }, []);
  getQuoteToday = () => {
    fetch('http://172.16.9.41:1999/api/v1/firebase/getMotivation')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson.quote)
        setQuoteToday(responseJson.quote)
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => setLoading(false));
  }
  checkPermission = async () => {
    messaging().hasPermission()
      .then(enabled => {
        if (enabled == 1) {
          getFcmToken();
        } else {
          requestPermission();
        }
      }).catch(err => {
        console.log("ERROR: ", err)
      })
  }

  requestPermission = async () => {
    messaging().requestPermission()
      .then(() => {
        getFcmToken();
      })
      .catch(error => {
        Toast.show("Quyền nhận thông báo từ MyVnpost bị từ chối")
        console.log('permission rejected');
      });
  }

  getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    // console.log(fcmToken, "checkkkk")
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        await AsyncStorage.setItem('fcmToken', fcmToken)
        // await models.setFCMToken(fcmToken);
      } else {
        console.log("Lấy FCM Token thất bại")
      }
    } else {
      console.log("==================Your Firebase Token is ok===================");
      console.log(fcmToken);
    }
  }
  createListenerMessage = async () => {
    //Foreground
    messaging().onMessage((mess) => {
      console.log(mess)
      pushNoti(mess.data)
    });
    // messaging().setBackgroundMessageHandler(async remoteMessage => {
    //   console.log('Message handled in the background!', remoteMessage);
    //   pushNoti(remoteMessage)
    // });
    const messageInCloseApp = await messaging().getInitialNotification();
    if (messageInCloseApp) {
      console.log("Open notification in quit app state")
      Alert.alert("Quit App")
    }
  }

  //Local push notification
  PushNotification.configure({
    onNotification: function (notification) {
      // console.log("Open notification:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  });
  const pushNoti = (mess) => {
    PushNotification.createChannel(
      {
        channelId: "makemyday_channel_id", // (required)
        channelName: "RN Kit push notification channel", // (required)                  
      }
    );
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: "makemyday_channel_id", //
      title: mess.tile, // (optional)
      message: mess.body, // (required)            
    });
  }

  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {isLoading ? <ActivityIndicator /> : (
        <Text
          onPress={() => {
            console.log("Hello")
            let mess = {
              tile: "For you",
              body: "Have a nice day!",
            }
            pushNoti(mess)
          }}
        >{quoteToday}</Text>
      )}
    </SafeAreaView>
  )
}
export default App;
