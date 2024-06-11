import React, {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles';

type HeaderProps = PropsWithChildren<{}>;
export function Header({}: HeaderProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.containerDesc}>
        <Text style={styles.lblHeader}>My E-commerce Shop</Text>
      </View>
    </View>
  );
}
