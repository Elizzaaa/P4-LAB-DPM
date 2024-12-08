import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function App() {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);

  // Fungsi untuk menambah skor
  const addScore = (team) => {
    if (team === "A") {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        Alert.alert("Pemenang", "Tim A Menang!");
      }
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        Alert.alert("Pemenang", "Tim B Menang!");
      }
    }
  };

  // Fungsi untuk mengurangi skor
  const subtractScore = (team) => {
    if (team === "A" && scoreTeamA > 0) {
      setScoreTeamA(scoreTeamA - 1);
    } else if (team === "B" && scoreTeamB > 0) {
      setScoreTeamB(scoreTeamB - 1);
    }
  };

  // Fungsi untuk mereset skor
  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pengaturan Skor Futsal</Text>
      <View style={styles.scoreBoard}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Tim A</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <Button title="+" onPress={() => addScore("A")} />
          <Button title="-" onPress={() => subtractScore("A")} />
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Tim B</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <Button title="+" onPress={() => addScore("B")} />
          <Button title="-" onPress={() => subtractScore("B")} />
        </View>
      </View>
      <Button title="Reset Pertandingan" onPress={resetScores} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  scoreBoard: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  teamContainer: {
    alignItems: "center",
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
