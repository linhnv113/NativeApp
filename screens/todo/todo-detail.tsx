import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TodoStackParams } from '.';

type Props = NativeStackScreenProps<TodoStackParams, 'TodoDetail'>;

export default function TodoDetail({ route }: Props) {
  const { todo } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.id}>ID: {todo.id}</Text>
      <Text style={styles.title}>Title: {todo.title}</Text>
      <Text style={styles.description}>Description: {todo.desc}</Text>
      <Text style={styles.status}>
        Status: {todo.isDone ? 'Completed' : 'Pending'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
  status: {
    fontSize: 16,
    color: '#007BFF',
  },
});
