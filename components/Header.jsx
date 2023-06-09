import React from "react";
import { Text, View, StyleSheet } from "react-native";
function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    width: "100%",
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
