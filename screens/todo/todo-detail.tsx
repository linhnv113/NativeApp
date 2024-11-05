import React from 'react';
import { View, Text } from 'react-native';

export default function TodoDetailScreen({ route }) {
  const { todoId } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Todo Detail</Text>
      <Text>Todo ID: {todoId}</Text>
    </View>
  );
}
