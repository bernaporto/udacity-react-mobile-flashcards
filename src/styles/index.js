import { StyleSheet } from "react-native";
import { Colors } from "../utils/constants";

const main = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.BACKGROUND,
  },
  card: {
    margin: 5,
    padding: 20,
    minHeight: 140,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },
  center: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
  }
});

const input = StyleSheet.create({
  textField: {
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 2,
  },
});

const buttons = StyleSheet.create({
  default: {
    backgroundColor: Colors.PRIMARY,
    padding: 6,
    borderRadius: 2,
    height: 35,
    marginTop: 3,
    marginBottom: 3,
    justifyContent: "center",
  },
  text: {
    color: Colors.WHITE,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: 'center',
  },
}); 

export default {
  input,
  buttons,
  ...main,
};
