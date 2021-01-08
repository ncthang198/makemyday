import React from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Alert,
  SafeAreaView,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
//Drawer
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import { logout } from "../../actions"
import AsyncStorage from "@react-native-async-storage/async-storage"
//Color
import { Colors } from "../../configs";
import { models } from "../../models";

//custom drawer content
export default (props) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.version}>
        <DrawerContentScrollView
          {...props}
        >
          <View style={{

          }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(logout());                                
              }}
            >
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>

        </DrawerContentScrollView>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  profilePic: {
    resizeMode: Platform.OS === "android" ? "cover" : "contain",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  logo: {
    resizeMode: "contain",
    width: "80%",
    height: 100,
  },
  logoutSection: {
    backgroundColor: Colors.lighter_green,
    borderRadius: 5,
    marginHorizontal: 10,
    height: 50,
    marginVertical: 20,
  },
  actionButton: {
    flexDirection: "row",
    marginHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },
  drawerSection: {
    marginTop: 10,
  },
  social: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  logout: {
    flexDirection: "row",
    alignItems: "center",
  },
  version: {
    height: 60,
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: Colors.light_grey,
  },
});