import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  exerciseCountContainer: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseCountText: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgb(22, 102, 42)",
    position: "relative",
    color: "#fff",
    width: "100%",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    position: "relative",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  toggleButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "green",
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleButtonAdded: {
    backgroundColor: "red",
  },
  toggleButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
