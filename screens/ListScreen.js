import React from "react";
import { FlatList, View } from "react-native";
import { Text, StyleSheet } from "react-native";

const ListScreen = () => {
  const friend = [
    {
      name: "Friend 1",
      age: 24,
    },
    {
      name: "Friend 2",
      age: 24,
    },
    {
      name: "Friend 3",
      age: 24,
    },
    {
      name: "Friend 4",
      age: 24,
    },
  ];

  return (
    <View>
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text style={styles.textHeadingStyle}>Friends</Text>
      </View>

      <FlatList
        //   horizontal
        //   showsHorizontalScrollIndicator={false}
        data={friend}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <View style={styles.ViewStyle}>
              <Text style={styles.ViewStyle}>{item.name}</Text>
              <Text style={styles.ViewStyle}>{item.age}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

//  JSS

const styles = StyleSheet.create({
  ViewStyle: {
    fontSize: 24,
    padding: 20,
    marginVertical: 60,
    color: "#000",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
  },
  textStyle: {
    flex: 1,
  },
  textHeadingStyle: {
    fontSize: 50,
    justifyContent: "center",
    display: "flex",
  },
});

export default ListScreen;
