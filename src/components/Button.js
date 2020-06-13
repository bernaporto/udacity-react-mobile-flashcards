import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "../utils/constants";
import styles from "../styles";

function Button(props) {
  const { color, disabled, onPress, title } = props;

  const style = [
    styles.buttons.default,
    {
      backgroundColor: disabled ? Colors.GREY : color || Colors.PRIMARY,
    }
  ];
  return (
    <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
      <Text style={styles.buttons.text}>{ title.toUpperCase() }</Text>
    </TouchableOpacity>
  )
}

export default Button;
