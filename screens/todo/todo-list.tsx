import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function TodoListScreen({ navigation }) {
  const todoList = [
    {
      id: 1,
      title: 'Todo 1',
      decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quos.',
    },
    {
      id: 2,
      title: 'Todo 2',
      decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quos.',
    },
    {
      id: 3,
      title: 'Todo 3',
      decs: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, quos.',
    },
  ];

  return (
    <View>
      <Text>Todo List</Text>
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.todoItem}>
            <Text>{item.title}</Text>
            <Button
              title="View"
              onPress={() => navigation.navigate('TodoDetail', { todo: item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
  },
});
