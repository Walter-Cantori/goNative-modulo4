import { StackNavigator, TabNavigator } from 'react-navigation';

import Home from './pages/home';
import Cart from './pages/cart';
import ProductDetail from './pages/productDetail';

import { colors } from './styles';

const Routes = StackNavigator({
  ProductDetail: { screen: ProductDetail },
  Main: {
    screen: TabNavigator({
      Home: { screen: Home },
      Cart: { screen: Cart },
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.pink,
        inactivateTintColor: colors.grey,
        style: {
          backgroundColor: colors.white,
          height: 40,
          paddingTop: 20,
        },
      },
    }),
  },
}, {
  navigationOptions: {
    headerTintColor: colors.pink,
    headerBackTitle: null,
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerStyle: {
      height: 54,
    },
  },
  initialRouteName: 'Main',
});

export default Routes;
