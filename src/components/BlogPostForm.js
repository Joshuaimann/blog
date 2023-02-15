import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues, create }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {create ? "Enter Title:" : "Enter New Title:"}
      </Text>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        value={title}
        onChangeText={(e) => setTitle(e)}
        style={styles.input}
        placeholder="title..."
      />
      <Text style={styles.text}>
        {create ? "Enter Content:" : "Enter New Content:"}
      </Text>
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
          onSubmit({ title, content });
        }}
        style={styles.button}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

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

export default BlogPostForm;
