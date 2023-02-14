import { Text, View, StyleSheet } from "react-native";

const BlogItem = ({ title, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 1,
    height: 175,
    padding: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    fontSize: 20,
  },
});

export default BlogItem;
