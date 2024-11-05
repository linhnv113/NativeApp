import React, { useState } from 'react';

import { TouchableOpacity, StyleSheet, Text, View, Alert } from 'react-native';
import FormInput from './components/form-input';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (email === 'root' && password === 'root') {
      Alert.alert('Form Submitted', 'Email and password have been submitted!');
    }
  };

  return (
    <View style={styles.container}>
      <FormInput
        label="Email"
        value={email}
        placeholderTextColor="#aaa"
        placeholder="youremail@example.com"
        onChangeText={setEmail}
      />

      <FormInput
        label="Password"
        value={password}
        placeholder="**********"
        placeholderTextColor="#aaa"
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
