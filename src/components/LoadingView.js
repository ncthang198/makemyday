import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    ActivityIndicator
} from "react-native";

export default LoadingView = () => {
    const loading = useSelector(state => state.commonReducer.loading)    

    return (

        <Modal
            style={{ margin: 0, flex: 1 }}
            // animationType="slide"
            transparent={true}
            visible={loading}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}

            animationIn={"fadeIn"}
            animationOut={"fadeOut"}
            animationInTiming={10}
            animationOutTiming={10}
            backdropOpacity={0.10}
            backdropColor={"gray"}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            </View>
        </Modal>
    )


}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        flex: 1,
        width: "100%",
        justifyContent: "center",
        backgroundColor: "transparent",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});