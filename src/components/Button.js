import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "../utils/constants";
import styles from "../styles";

function Button(props) {
  const { color, disabled, clear, onPress, title } = props;

  const tintColor = disabled ? Colors.GREY : color || Colors.PRIMARY;
  const buttonStyle = [
    styles.button.default,
    { backgroundColor: clear ? 'transparent' : tintColor },
  ];
  const textStyle = [
    styles.button.text,
    { color: clear ? tintColor : Colors.WHITE },
  ];

  return (
    <TouchableOpacity disabled={disabled} style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{ title.toUpperCase() }</Text>
    </TouchableOpacity>
  )
}

export default Button;
