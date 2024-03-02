import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default class Test extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'red', width: "100%" }}>
          <View style={{ borderWidth: 1, borderRadius: 10, borderColor: 'green', width: "100%" }}>
            <View style={{ borderWidth: 1, borderRadius: 15, borderColor: 'blue', width: "100%" }}>
              <Text style={{alignSelf: 'center'}}>Search</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});
