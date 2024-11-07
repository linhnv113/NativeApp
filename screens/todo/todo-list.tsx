import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { TodoStackParams } from '.';

type Props = NativeStackScreenProps<TodoStackParams, 'TodoList'>;

export default function TodoList({ navigation }: Props) {
  const todoList = [
    {
      id: 1,
      title: 'Todo 1',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, molestiae?',
      isDone: true,
    },
    {
      id: 2,
      title: 'Todo 2',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, molestiae?',
      isDone: false,
    },
    {
      id: 3,
      title: 'Todo 3',
      desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, molestiae?',
      isDone: false,
    },
  ];

  return (
    <FlatList
      data={todoList}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.todoItem}>
          <Text style={styles.todoText}>{item.title}</Text>
          <Button
            title="View"
            onPress={() => navigation.navigate('TodoDetail', { todo: item })}
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  todoText: {
    flex: 1,
    marginRight: 10,
  },
});
