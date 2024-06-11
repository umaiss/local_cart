import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from '../Styles';
import {TodoItemProps} from '../types';
export function TodoItem({
  todoData,
  onDelete = () => {},
  onPress = () => {},
}: TodoItemProps): React.JSX.Element {
  const {id, text, completed} = todoData;
  return (
    <View key={id} style={styles.itemContainer}>
      <Pressable
        onPress={() => onPress(id)}
        style={completed ? styles.completedCheckbox : styles.pendingCheckbox}
      />
      <Text style={[styles.lblTodoText, completed && styles.lblTodoDone]}>
        {text}
      </Text>
      <Pressable
        onPress={() => onDelete(id)}
        style={styles.containerDeleteIcon}>
        <Image
          style={styles.iconDelete}
          source={require('../../assets/icons/ic_trash.png')}
        />
      </Pressable>
    </View>
  );
}
