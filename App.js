import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

// import classes from "./main.module.scss";

export default function App() {
  const [todos, setTodo] = useState([]);

  const deleteTodo = (id) => {
    setTodo((old) => {
      return old.filter((todo) => todo.id != id);
    });
  };
  const handleSubmit = (todo) => {
    if (todo.trim() !== "") {
      setTodo((old) => {
        return [
          { text: todo, id: Math.floor(Math.random() * 1000).toString() },
          ...old,
        ].sort();
      });
    } else {
      Alert.alert("oops", "Todo Have To be more Than 1 Charchter", [
        {
          text: "understod",
          onPress: () => {
            console.log("Aler Closed");
          },
        },
      ]);
    }
  };

  const colseKeyboardHandler = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={colseKeyboardHandler}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Form handleSubmit={handleSubmit} />
        </View>
        <View style={styles.list}>
          <FlatList
            keyExtractor={todos.id}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteTodo={deleteTodo} />
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
});
