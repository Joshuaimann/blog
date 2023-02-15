import { useContext } from "react";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";

const IndexScreen = ({ navigation }) => {
  const { state, addBlog, deleteBlog } = useContext(Context);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(_, index) => index}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { key: item.key })}
            >
              <View style={styles.blogItemContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <TouchableOpacity
                  onPress={(e) => {
                    e.preventDefault();
                    deleteBlog(item.key);
                  }}
                >
                  <Feather name="trash-2" style={styles.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
    title: 'Blog List'
  };
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
  blogItemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5
  },
  text: {
    fontSize: 20,
  },
  container: {
    marginTop: 50,
  },
});

export default IndexScreen;
