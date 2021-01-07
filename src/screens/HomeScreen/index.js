
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text, ActivityIndicator
} from 'react-native';


export default HomeScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [quoteToday, setQuoteToday] = useState();
  useEffect(() => {
    getQuoteToday();
    return () => {
      // console.log("un mount")
    }
  }, [])
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
  return (
    <SafeAreaView style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      {isLoading ? <ActivityIndicator /> : (
        <Text
          onPress={() => {
            console.log("Hello")
            navigation.openDrawer();
          }}
        >{quoteToday}</Text>
      )}
    </SafeAreaView>
  );
}