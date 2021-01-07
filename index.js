import { AppRegistry } from 'react-native';
import App from './App.js';
import { name as appName } from './app.json';
import messaging from '@react-native-firebase/messaging';
var PushNotification = require("react-native-push-notification");

pushNoti = (mess) => {    
    PushNotification.createChannel(
        {
            channelId: "makemyday_channel_id", // (required)
            channelName: "RN Kit push notification channel", // (required)                  
        }
    );
    PushNotification.localNotification({
        /* Android Only Properties */
        channelId: "makemyday_channel_id", // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). Once the channel is created, the channel will not be update. Make sure your channelId is different if you change these options. If you have created a custom channel, it will apply options of the channel.

        /* iOS and Android properties */
        id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        title: mess.data.title, // (optional)
        message: mess.data.body, // (required)      
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)            
        userInfo: { data: { hello: "Hello world !" } }, // (optional) default: {} (using null throws a JSON value '<null>' error)
    });
}
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
    pushNoti(remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);

