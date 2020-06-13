import React from "react";
import { Text } from "react-native";

function Title(props) {
  return (
    <Text style={{
      textAlign: "center",
      fontSize: 24,
    }}>
      { props.children }
    </Text>
  )
}

export default Title;
