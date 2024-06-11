import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Colors from '../Utils/Colors';
import styles from './Styles';
import {TodoDataProps} from './types';
import {Header, TodoItem} from './components';

function Home(): React.JSX.Element {
  const [addNewTodo, setAddNewTodo] = useState('');
  const [todoData, setTodoData] = useState<TodoDataProps[]>([]);

  const handleOnTodoPress = (id: number) => {
    setTodoData(
      todoData.map(element =>
        element.id === id
          ? {...element, completed: !element.completed}
          : element,
      ),
    );
  };
  const handleOnTodoDelete = (id: number) => {
    setTodoData(todoData.filter(element => element.id !== id));
  };
  const renderItem = ({item}: {item: TodoDataProps}) => {
    return (
      <TodoItem
        todoData={item}
        onPress={handleOnTodoPress}
        onDelete={handleOnTodoDelete}
      />
    );
  };
  const onChangeAddTodo = (value: string) => {
    setAddNewTodo(value);
  };
  const handleAddTodo = () => {
    if (addNewTodo.match(regex)) {
      return;
    }
    let newTodo: TodoDataProps = {
      id: todoData.length,
      text: addNewTodo,
      completed: false,
    };
    setTodoData([...todoData, newTodo]);
    setAddNewTodo('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <>
        <Header
          totalTasks={todoData.length}
          doneTasks={
            todoData.filter(element => element.completed === true).length
          }
        />
        <View style={styles.containerInput}>
          <TextInput
            onChangeText={onChangeAddTodo}
            value={addNewTodo}
            placeholderTextColor={Colors.GRANITE_GRAY}
            placeholder="write your next task"
            style={styles.textinput}
          />
          <Pressable
            disabled={!addNewTodo}
            onPress={handleAddTodo}
            style={styles.containerAddButton}>
            <Text style={styles.lblAdd}>+</Text>
          </Pressable>
        </View>
        <FlatList
          data={todoData}
          renderItem={renderItem}
          keyExtractor={item => item.toString()}
        />
      </>
    </SafeAreaView>
  );
}

export default Home;
const regex = /^\s+$/;
