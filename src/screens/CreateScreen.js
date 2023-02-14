import { useState, useContext } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlog } = useContext(Context);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        value={title}
        onChangeText={(e) => setTitle(e)}
        style={styles.input}
        placeholder="title..."
      />
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        value={content}
        onChangeText={(e) => setContent(e)}
        style={styles.input}
        placeholder="content..."
      />
      <Button
        title="Save"
        onPress={(e) => {
          e.preventDefault();
          addBlog(title, content);
          navigation.navigate("Index");
        }}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 5,
    paddingLeft: 5,
    fontSize: 18,
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
  },
  container: {
    paddingTop: 50,
  },
});

export default CreateScreen;
