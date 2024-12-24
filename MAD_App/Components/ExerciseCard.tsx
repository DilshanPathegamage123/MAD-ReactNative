import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../Styles/HomeStyles";

interface ExerciseCardProps {
  exercise: {
    id: number;
    name: string;
    image: string;
  };
  onAdd: () => void;
  onRemove: () => void;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, onAdd, onRemove }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleToggle = () => {
    if (isAdded) {
      onRemove();
    } else {
      onAdd();
    }
    setIsAdded(!isAdded);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: exercise.image }} style={styles.image} />
      <Text style={styles.name}>{exercise.name}</Text>
      <TouchableOpacity
        style={[styles.toggleButton, isAdded && styles.toggleButtonAdded]}
        onPress={handleToggle}
      >
        <Text style={styles.toggleButtonText}>{isAdded ? "-" : "+"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExerciseCard;