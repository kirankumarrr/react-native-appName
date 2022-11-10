import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';


//Decides which content to be displayed on Screen
const navigator = createStackNavigator(
  {
    Home: IndexScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

export default createAppContainer(navigator);
