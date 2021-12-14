import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import logo from "./assets/logo.png";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("1");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView style={styles.view}>
      <Image source={logo} style={{ width: 505, height: 359 }} />;
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Type feedback here"
        keyboardType="numeric"
      />
      <Text style={{ color: "#0", fontSize: 30 }}> Lets convert!!!</Text>
      <Text style={{ color: "#999", fontSize: 60 }}>
        {(text * 0.7).toFixed(2)}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: "#eaff47",
  },
  view: {
    alignItems: "center",
    backgroundColor: "#eaff47",
    height: "100%",
  },
});
export default UselessTextInput;