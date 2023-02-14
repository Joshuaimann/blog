import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import ShowScreen from "./src/screens/ShowScreen";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Edit: EditScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog List",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <Provider children={<App/>}/>
};
