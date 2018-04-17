import { StackNavigator } from 'react-navigation';

import Home from './pages/home';
import Cart from './pages/cart';
import ProductDetail from './pages/productDetail';

import { colors } from './styles';

const Routes = StackNavigator({
  ProductDetail: { screen: ProductDetail },
  Home: { screen: Home },
  Cart: { screen: Cart },
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
  initialRouteName: 'Home',
});

export default Routes;
