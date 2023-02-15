import { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlog } = useContext(Context);
  const blog = state.find((post) => post.key === navigation.getParam("key"));
  const handleEditBlogPost = (blog) => {
    editBlog(
      {
        title: blog.title,
        content: blog.content,
        key: navigation.getParam("key"),
      },
      () => {
        navigation.goBack();
      }
    );
  };

  return (
    <View>
      <BlogPostForm
        onSubmit={handleEditBlogPost}
        initialValues={{ title: blog.title, content: blog.content }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
