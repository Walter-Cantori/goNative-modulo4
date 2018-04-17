import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Footer from '../../components/Footer';
import styles from './styles';
import CartItem from './components/CartItem';

class Cart extends Component {
  static navigationOptions = {
    title: 'Carrinho',
  };

  static propTypes = {
    cart: PropTypes.shape({
      items: PropTypes.array.isRequired,
    }).isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  render() {
    const { cart } = this.props;
    const subTotal = cart.items.reduce((acc, item) => (item.price * item.qty) + acc, 0).toFixed(2);

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={cart.items}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CartItem product={item} />}
        />

        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalTitle}>Subtotal</Text>
          <Text style={styles.subtotalPrice}>R${subTotal}</Text>
        </View>

        <Footer navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
});


export default connect(mapStateToProps, null)(Cart);
