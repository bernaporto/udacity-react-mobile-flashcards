import React from "react";
import { SafeAreaConsumer } from "react-native-safe-area-context";
import { KeyboardAvoidingView } from "react-native";
import styles from "../styles";

function KeyboardSafeArea(props) {
  return (
    <SafeAreaConsumer>
      {
        insets => (
          <KeyboardAvoidingView
            style={styles.fill}
            behavior="padding"
            keyboardVerticalOffset={insets.bottom + 20}>
            { props.children }
          </KeyboardAvoidingView>
        )
      }
    </SafeAreaConsumer>
  );
}

export default KeyboardSafeArea;
