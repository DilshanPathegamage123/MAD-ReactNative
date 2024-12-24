import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import styles from "./Styles/Styles";

interface Props {
  navigation: NavigationProp<any>;
}

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ImageBackground
      source={require("../assets/backgroundimg5.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay} />
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            /* Handle login */
          }}
        >
          <Text style={styles.buttonText}>Signin</Text>
        </TouchableOpacity>
        <Text
          style={styles.textClass}
          onPress={() => navigation.navigate("Registration")}
        >
          Create Account
        </Text>
      </View>
    </ImageBackground>
  );
}
