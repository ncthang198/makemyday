
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text, ActivityIndicator
} from 'react-native';
import * as urlDefined from "../../configs/urlDefined"

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
    fetch(urlDefined.baseURL + '/firebase/getMotivation')
      .then((response) => response.json())
      .then((responseJson) => {
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
            navigation.openDrawer();
          }}
        >{quoteToday}</Text>
      )}
    </SafeAreaView>
  );
}