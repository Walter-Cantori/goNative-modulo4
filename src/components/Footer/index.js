import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { colors } from '../../styles';
import styles from './styles';

class Footer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
      state: PropTypes.shape({
        routeName: PropTypes.string.isRequired,
      }).isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    active: null,
  };

  componentDidMount = () => {
    this.setState({ active: this.props.navigation.state.routeName });
  }

  changeTab = (tab) => {
    this.setState({
      active: tab,
    });

    if (this.props.navigation.state.routeName !== tab) {
      this.props.navigation.navigate({ routeName: tab });
    }
  }

  render() {
    const homeColor = this.state.active === 'Home' ? colors.pink : colors.grey;
    const cartColor = this.state.active === 'Cart' ? colors.pink : colors.grey;

    return (
      <View style={styles.container}>

        <TouchableOpacity onPress={() => this.changeTab('Home')}>
          <Icon name="home" size={24} color={homeColor} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.changeTab('Cart')}>
          <Icon name="shopping-cart" size={24} color={cartColor} />
        </TouchableOpacity>

      </View>
    );
  }
}


export default Footer;
