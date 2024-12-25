import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import ExerciseCard from "../Components/ExerciseCard";
import styles from "../Styles/HomeStyles";

type Props = StackScreenProps<RootStackParamList, "Home">;

interface Exercise {
  id: number;
  name: string;
  image: string;
  uuid: string;
}

export default function HomeScreen({ navigation, route }: Props) {
  const username = route.params?.username || "Guest";
  const [exerciseCount, setExerciseCount] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const aliasResponse = await fetch(
        "https://wger.de/api/v2/exercisealias/?limit=20000"
      );
      const aliasData = await aliasResponse.json();
      const fetchedAliases = aliasData.results;

      const exercisesWithImages = await Promise.all(
        fetchedAliases.map(async (alias: any) => {
          try {
            const imageResponse = await fetch(
              `https://wger.de/api/v2/exerciseimage/?exercise_base=${alias.exercise}`
            );
            const imageData = await imageResponse.json();
            const exerciseImage = imageData.results?.find(
              (img: any) => img.is_main
            );
            return {
              id: alias.exercise,
              name: alias.alias,
              image: exerciseImage ? exerciseImage.image : "",
              uuid: alias.uuid,
            };
          } catch (error) {
            console.error(
              `Error fetching image for exercise ${alias.exercise}:`,
              error
            );
            return null;
          }
        })
      );

      const filteredExercises = exercisesWithImages.filter(
        (exercise) => exercise && exercise.image !== ""
      );

      setExercises(filteredExercises);
      console.log(filteredExercises);
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
        keyExtractor={(item) => `${item.id}-${item.uuid}`}
        renderItem={({ item }) => (
          <ExerciseCard
            exercise={item}
            onAdd={handleAddExercise}
            onRemove={handleRemoveExercise}
          />
        )}
      />
      <View style={styles.exerciseCountContainer}>
        <Text style={styles.exerciseCountText}>
          Exercises Added for Schedule: {exerciseCount}
        </Text>
      </View>
    </View>
  );
}
