import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, TextInput, View} from 'react-native';
import {ProductItemProps} from '..';
import styles from '../styles';
import Colors from '../../../../Utils/Colors';
export function CartItem({
  data,
  onDelete = () => {},
  onUpdate = () => {},
}: ProductItemProps): React.JSX.Element {
  const [addQuantity, setAddQuantity] = useState(data.quantity);

  useEffect(() => {
    setAddQuantity(data.quantity);
  }, [data.quantity]);
  const onChangeQuantity = (value: string) => {
    setAddQuantity(parseFloat(value));
    onUpdate(data, value);
  };
  const calculateTotalPrice = () => (data.price * data.quantity).toFixed(2);

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.title}>{calculateTotalPrice()}</Text>
      <TextInput
        onChangeText={onChangeQuantity}
        value={addQuantity.toString()}
        placeholderTextColor={Colors.GRANITE_GRAY}
        style={styles.textinput}
      />
      <Pressable
        onPress={() => onDelete(data)}
        style={styles.containerRemoveButton}>
        <Image
          style={styles.iconDelete}
          source={require('../../../../assets/icons/ic_trash.png')}
        />
      </Pressable>
    </View>
  );
}
