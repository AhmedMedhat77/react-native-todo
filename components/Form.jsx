import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
function Form(props) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="todos..."
        style={styles.input}
        onChangeText={changeHandler}
      />
      <Button
        title="Add Todo"
        color={"coral"}
        onPress={() => {
          props.handleSubmit(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 10,
  },
});
export default Form;
