import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import ComponentsScreen from './screens/ComponentsScreen';
import ListScreen from './screens/ListScreen';
import ImageScreen from './screens/ImageScreen';
import CounterScreen from './screens/CounterScreen';

//Decides which content to be displayed on Screen
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
