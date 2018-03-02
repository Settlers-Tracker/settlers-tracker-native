import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewGame from "./components/NewGame";
export default class App extends React.Component {
  render() {
    return (
      <View>
        <NewGame />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
