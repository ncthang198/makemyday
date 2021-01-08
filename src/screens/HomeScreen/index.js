
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  Text, ActivityIndicator, StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native';
import * as urlDefined from "../../configs/urlDefined"

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen = ({ route, navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [quoteToday, setQuoteToday] = useState();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    console.log("refes")
    setRefreshing(true);
    setTimeout(() => {      
      getQuoteToday();
      setRefreshing(false)
    }, 500);
  }, []);
  useEffect(() => {
    getQuoteToday();
    return () => {
      // console.log("un mount")
    }
  }, [])
  const getQuoteToday = () => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text style={{textAlign:"center"}}>{quoteToday}</Text>
      </ScrollView>
    </SafeAreaView>
  );

}



