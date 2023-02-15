import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlog } = useContext(Context);

  const handleAddBlogPost = blog => {
    addBlog(blog.title, blog.content, () => {
      navigation.navigate("Index");
    });
  };

  return (
    <View>
      <BlogPostForm onSubmit={handleAddBlogPost} create={true} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
