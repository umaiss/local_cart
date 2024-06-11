import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {Header} from './components';

import styles from './styles';
import {Product} from './Product';

import {PropsWithChildren} from 'react';
import {CartItem} from './components/CartItem';

export type ProductItemProps = PropsWithChildren<{
  data: ProductDataProps;
  onDelete: (id: number) => void;
  onUpdate: (id: ProductDataProps, quantity: number) => void;
}>;

export type ProductDataProps = PropsWithChildren<{
  id: number;
  name: string;
  price: number;
  quantity: number;
}>;

function ShoppingApp(): React.JSX.Element {
  const ProductData = [
    {id: 1, name: 'Shirt', price: 19.99},

    {id: 2, name: 'Hat', price: 14.5},

    {id: 3, name: 'Shoes', price: 79.95},
  ];
  const [shoppingList, setShoppingList] = useState<ProductDataProps[]>([]);
  console.log('🚀 ~ ShoppingApp ~ shoppingList:', shoppingList);

  // Placeholder functions to handle quantity changes and item removal (replace with yours)

  function removeItem(item: ProductDataProps) {
    setShoppingList(shoppingList.filter(element => element.id !== item.id));
  }

  const handleAddItemToCart = (item: ProductDataProps) => {
    if (shoppingList.length) {
      let exists = shoppingList.findIndex(product => product.id === item.id);
      if (exists >= 0) {
        onUpdateItem(exists);
        return;
      }
    }
    onAddItem(item);
  };
  const onAddItem = (item: ProductDataProps) => {
    let product = new Product(item);
    product.quantity = 1;
    setShoppingList([...shoppingList, product]);
  };
  const onUpdateItem = (exists: number) => {
    let localList = JSON.parse(JSON.stringify(shoppingList));
    localList[exists].quantity += 1;
    setShoppingList(localList);
  };
  const onIncreaseQuantity = (item: ProductDataProps, quantity: number) => {
    let exists = shoppingList.findIndex(product => product.id === item.id);
    let localList = JSON.parse(JSON.stringify(shoppingList));
    localList[exists].quantity = quantity;
    setShoppingList(localList);
  };
  const renderSectionHeader = (title: string) => (
    <Text style={styles.header}>{title}</Text>
  );
  const renderItem = ({item}: {item: ProductDataProps}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.price}</Text>
      <Pressable
        onPress={() => handleAddItemToCart(item)}
        style={styles.containerAddButton}>
        <Text style={styles.lblAdd}>+</Text>
      </Pressable>
    </View>
  );
  const renderCartItem = ({item}: {item: ProductDataProps}) => (
    <CartItem
      data={item}
      onDelete={() => removeItem(item)}
      onUpdate={(item, quantity) => onIncreaseQuantity(item, quantity)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <>
        <Header />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {renderSectionHeader('Products')}
          <FlatList
            scrollEnabled={false}
            keyExtractor={item => item.toString()}
            renderItem={renderItem}
            data={ProductData}
          />
          {shoppingList.length ? renderSectionHeader('Cart') : null}
          <FlatList
            scrollEnabled={false}
            keyExtractor={item => item.toString()}
            renderItem={renderCartItem}
            data={shoppingList}
          />
        </ScrollView>
      </>
    </SafeAreaView>
  );
}

export default ShoppingApp;
