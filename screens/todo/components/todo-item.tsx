import React, { useState } from 'react';

import CheckBox from '@react-native-community/checkbox';

import { View, Text, Button, StyleSheet } from 'react-native';
import { Todo } from '../todo.interface';
import { useTodoContext } from '../../../contexts/todo.context';

type Props = {
  todo: Todo;
  navigation: any;
};

export default function TodoItem({ todo, navigation }: Props) {
  const { handleDeleteTodo } = useTodoContext();

  const [isCheck, setIsCheck] = useState(todo.isDone);

  return (
    <View style={styles.todoItem}>
      <CheckBox
        value={isCheck}
        onValueChange={(newValue) => console.log(newValue)}
      />
      <Text style={styles.todoText}>{todo.title}</Text>
      <Button
        title="View"
        onPress={() => navigation.navigate('TodoDetail', { todo })}
      />
      <Button
        title="Delete"
        color="red"
        onPress={() => handleDeleteTodo(todo.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    gap: 8,
  },

  todoText: {
    flex: 1,
    marginRight: 10,
  },
});
