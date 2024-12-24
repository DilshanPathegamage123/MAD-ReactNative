import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import ExerciseCard from "../Components/ExerciseCard";
import styles from "../Styles/HomeStyles";

type Props = StackScreenProps<RootStackParamList, 'Home'>;

interface Exercise {
  id: number;
  name: string;
  image: string;
}

export default function HomeScreen({ navigation, route }: Props) {
  const username = route.params?.username || "Guest"; // Use "Guest" as the default username
  const [exerciseCount, setExerciseCount] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const exerciseResponse = await fetch("https://wger.de/api/v2/exercise/");
      const exerciseData = await exerciseResponse.json();
      const fetchedExercises = exerciseData.results.map((exercise: any) => ({
        id: exercise.id,
        name: exercise.name,
        image: "", // Placeholder for image URL
      }));

      const imageResponse = await fetch("https://wger.de/api/v2/exerciseimage/");
      const imageData = await imageResponse.json();
      const exerciseImages = imageData.results;

      const exercisesWithImages = fetchedExercises.map((exercise: any) => {
        const exerciseImage = exerciseImages.find((img: any) => img.exercise_base === exercise.id);
        return {
          ...exercise,
          image: exerciseImage ? exerciseImage.image : "https://example.com/default-image.jpg",
        };
      });

      setExercises(exercisesWithImages);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExercise = () => {
    setExerciseCount(exerciseCount + 1);
  };

  const handleRemoveExercise = () => {
    if (exerciseCount > 0) {
      setExerciseCount(exerciseCount - 1);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.username}>Welcome, {username}!</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ExerciseCard
            exercise={item}
            onAdd={handleAddExercise}
            onRemove={handleRemoveExercise}
          />
        )}
      />
      <View style={styles.exerciseCountContainer}>
        <Text style={styles.exerciseCountText}>Exercises Added for Schedule: {exerciseCount}</Text>
      </View>
    </View>
  );
}