import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TodoList from './todo-list';
import TodoDetail from './todo-detail';
import { type Todo } from './todo.interface';
import { TodoProvider } from '../../contexts/todo.context';

export type TodoStackParams = {
  TodoList: undefined;
  TodoDetail: { todo: Todo };
};

const Stack = createNativeStackNavigator<TodoStackParams>();

export default function TodoStack() {
  return (
    <TodoProvider>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="TodoDetail" component={TodoDetail} />
      </Stack.Navigator>
    </TodoProvider>
  );
}
