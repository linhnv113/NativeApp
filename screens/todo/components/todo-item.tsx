import React, { useState } from 'react';

import { View, Text, Button, StyleSheet } from 'react-native';
import { Todo } from '../todo.interface';
import { useTodoContext } from '../../../contexts/todo.context';
import { CheckBox } from '@rneui/themed';

type Props = {
  todo: Todo;
  navigation: any;
};

export default function TodoItem({ todo, navigation }: Props) {
  const { handleDeleteTodo, handleUpdateTodo } = useTodoContext();
  const [isCheck, setIsCheck] = useState(todo.isDone);

  const toggleCheckbox = () => {
    handleUpdateTodo(todo.id);
    setIsCheck(!isCheck);
  };

  return (
    <View style={styles.todoItem}>
      <CheckBox
        checked={todo.isDone}
        onPress={toggleCheckbox}
        title={todo.title}
        style={styles.todoText}
      />
      <View style={styles.buttonContainer}>
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
  },

  todoText: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
});
