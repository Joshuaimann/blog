import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogItem from "../components/BlogItem";
import { Feather} from '@expo/vector-icons'


const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const key = navigation.getParam("key");
  const blogPost = state.find((post) => post.key === key);

  return (
    <View>
      <BlogItem title={blogPost.title} description={blogPost.content} />
    </View>
  );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
      headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit", { key: navigation.getParam('key') })}>
          <Feather name="edit" size={30} />
        </TouchableOpacity>
      ),
      title: "Create",
    };
}

const styles = StyleSheet.create({});

export default ShowScreen;
