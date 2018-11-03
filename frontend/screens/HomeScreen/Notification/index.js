import React from "react";
import { AsyncStorage, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
class NotificationScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="알림"
                    onPress={() => {
                        console.log("test");
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    }
});

export default NotificationScreen;
