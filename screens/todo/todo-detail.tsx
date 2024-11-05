import React from 'react';
import { View, Text } from 'react-native';

export default function TodoDetailScreen({ route }) {
  const { todo } = route.params;

  return (
    <View>
      <Text>Todo Detail</Text>
      <Text>Todo id: {todo.id}</Text>
      <Text>Todo title: {todo.title}</Text>
      <Text>Todo desc: {todo.decs}</Text>
    </View>
  );
}
