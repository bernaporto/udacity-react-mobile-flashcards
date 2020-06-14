import { StyleSheet } from "react-native";
import { Colors } from "../utils/constants";

const main = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.TERTIARY,
  },
  card: {
    margin: 5,
    padding: 20,
    minHeight: 140,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },
  fill: {
    flex: 1,
  },
  center: {
    alignContent: "center",
    justifyContent: "center",
  }
});

const input = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    color: Colors.DARK_GREY,
    marginBottom: 4,
  },
  inputField: {
    height: 40,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
  },
});

const button = StyleSheet.create({
  default: {
    padding: 6,
    borderRadius: 2,
    height: 35,
    marginTop: 3,
    marginBottom: 3,
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'center',
  },
});

const text = StyleSheet.create({
  title: {
    color: Colors.TERTIARY,
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
  },
  center: {
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  result: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
  },
  info: {
    alignSelf: "flex-end",
    fontSize: 14,
  },
});

export default {
  input,
  button,
  text,
  ...main,
};
