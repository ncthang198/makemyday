/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import PushNotification from "react-native-push-notification";
PushNotification.configure({
  onNotification: function (notification) {
    console.log("Open notification:", notification);
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  repeatType: "minute", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
  repeatTime:1


});

const App = () => {
  const pushNoti = (mess) => {
    PushNotification.createChannel(
      {
        channelId: "rnkit_channel_id", // (required)
        channelName: "RN Kit push notification channel", // (required)                  
      }
    );
    PushNotification.localNotification({
      /* Android Only Properties */
      channelId: "rnkit_channel_id", // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). Once the channel is created, the channel will not be update. Make sure your channelId is different if you change these options. If you have created a custom channel, it will apply options of the channel.

      /* iOS and Android properties */
      id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
      title: mess.tile, // (optional)
      message: mess.body, // (required)      
      playSound: true, // (optional) default: true
      soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)            
      userInfo: { data: { hello: "Hello world !" } }, // (optional) default: {} (using null throws a JSON value '<null>' error)
    });
  }

  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    message: "My Notification Message", // (required)
    date: new Date(Date.now() + 2 * 1000), // in 60 secs
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
  });
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text
        onPress={() => {
          console.log("Hello")
          let mess = {
            tile: "For you",
            body: "Have a nice day!",
          }
          pushNoti(mess)
        }}
      >Make my day :))</Text>
    </SafeAreaView>
  )
}
export default App;
