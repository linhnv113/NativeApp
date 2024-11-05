import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import FormInput from '../components/form-input';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && password === '12345') {
      Alert.alert('Login Success!');
      navigation.navigate('Home');
    } else {
      Alert.alert('Failure', 'Please provide email and password');
    }
  };

  return (
    <View style={styles.container}>
      <FormInput
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholder="youremail@example.com"
      />
      <FormInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholder="**********"
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
});
