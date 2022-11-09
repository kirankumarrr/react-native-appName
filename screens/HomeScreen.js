import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  // console.log('props :', props.navigation);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => {
          console.log("Button Pressed");
          props.navigation.navigate('Components')
        }}
        title="Go to CompoentScreen" />
      <Button
        onPress={() => {
          console.log("Button Pressed");
          props.navigation.navigate('Image')
        }}
        title="Go to Image Screen" />
      <Button
        onPress={() => {
          console.log("Button Pressed");
          props.navigation.navigate('Counter')
        }}
        title="Go to Counter Screen" />
      <TouchableOpacity
        onPress={() => {
          console.log("TouchableOpacity Pressed");
          props.navigation.navigate('List')
        }}
      >
        <Text style={styles.text}>Go to List Demo 1</Text>
        <Text style={styles.text}>Go to List Demo 2</Text>
        <Text style={styles.text}>Go to List Demo 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
