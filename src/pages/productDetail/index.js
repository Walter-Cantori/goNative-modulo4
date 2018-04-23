import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '../../store/ducks/cart';

import styles from './styles';
import Footer from '../../components/Footer';

class ProductDetail extends Component {
  static propTypes = {
    products: PropTypes.shape({
      selectedProduct: PropTypes.shape({
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,

    navigation: PropTypes.shape({
      dispatch: PropTypes.func.isRequired,
      state: PropTypes.shape({
        routeName: PropTypes.string.isRequired,
      }).isRequired,
      navigate: PropTypes.func.isRequired,
    }).isRequired,

    addToCart: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    title: 'Detalhes do Produto',
    tabBarIcon: () => {}
  };

  handleAddToCart(selectedProduct) {
    this.props.addToCart(selectedProduct);
    this.props.navigation.navigate({ routeName: 'Cart' });
  }

  render() {
    const { selectedProduct } = this.props.products;
    return (
      <View style={styles.outerContainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={{ uri: selectedProduct.image }}
          />
          <View style={styles.decription}>
            <Text style={styles.productName}>{selectedProduct.name}</Text>
            <Text style={styles.productPrice}>R$ {selectedProduct.price}</Text>
            <Text style={styles.productBrand}>{selectedProduct.brand}</Text>
          </View>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => this.handleAddToCart(selectedProduct)}
          >
            <Text style={styles.cartText} >Adicionar ao Carrinho</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* <Footer navigation={this.props.navigation} /> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
