import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { TodoStackParams } from '.';
import FormInput from '../../components/form-input';
import TodoItem from './components/todo-item';
import { useTodoContext } from '../../contexts/todo.context';

type Props = NativeStackScreenProps<TodoStackParams, 'TodoList'>;

export default function TodoList({ navigation }: Props) {
  const { todoList, handleAddTodo } = useTodoContext();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    handleAddTodo(title);
    setTitle('');
  };

  return (
    <>
      <View style={styles.formContainer}>
        <Text style={styles.formContainerTitle}>Add New Todo</Text>
        <FormInput
          value={title}
          placeholder="Todo title"
          onChangeText={setTitle}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem todo={item} navigation={navigation} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },

  formContainerTitle: {
    fontSize: 32,
    fontWeight: 700,
    textAlign: 'center',
  },
});
