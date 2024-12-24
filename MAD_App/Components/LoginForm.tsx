import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import styles from "../Styles/Styles";

interface Props {
  navigation: NavigationProp<any>;
}

export default function LoginForm({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    navigation.navigate("Home", { username: email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>fitTrack</Text>
      <Text style={styles.title}>Welcome to fitTrack</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Signin</Text>
      </TouchableOpacity>
      <Text
        style={styles.textClass}
        onPress={() => navigation.navigate("Registration")}
      >
        Create Account
      </Text>
    </View>
  );
}