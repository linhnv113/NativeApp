import React, { useState } from 'react';

import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import FormInput from '../components/form-input';
import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && password === '12345') {
      Alert.alert('Login successful!');
      navigation.navigate('home');
    } else {
      Alert.alert('Sai rồi', 'admin/12345');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyNativeApp</Text>
      <FormInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="youraddress@example.com"
      />
      <FormInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="*************"
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
