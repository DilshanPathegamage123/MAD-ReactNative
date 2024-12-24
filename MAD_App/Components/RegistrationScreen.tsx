import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Button,
  StyleSheet,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import styles from "./Styles/Styles";

interface Props {
  navigation: NavigationProp<any>;
}

export default function RegistrationScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <ImageBackground
      source={require("../assets/backgroundimg4.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>fitTrack</Text>

        <Text style={styles.title}>Create Account</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Handle login */
          }}
        >
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <Text
          style={styles.textClass}
          onPress={() => navigation.navigate("Login")}
        >
          SignIn
        </Text>
      </View>
    </ImageBackground>
  );
}
