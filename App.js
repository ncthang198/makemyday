import React, { useEffect, useState } from 'react';
import { StatusBar, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [quote, setQuote] = useState(null);
  const statusBarColor = "blue"
  const onRefresh = React.useCallback(() => {
    getQuoteRandom();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getQuoteRandom();
  }, [])

  getQuoteRandom = () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const sizeQuotes = data.length
        const randomNumber = Math.floor(Math.random() * sizeQuotes) + 1
        console.log(data[randomNumber]);
        setQuote(data[randomNumber])
      });
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fbc531"
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {quote && <Text style={{ textAlign: "center" }}>{quote.text}</Text>}
        {quote && <Text style={{ textAlign: "center", fontWeight: "bold", marginTop: 10 }}>"{quote.author?quote.author:"anonymous"}"</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  scrollView: {
    flex: 1,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;