import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { handleAddCard } from "../store/actions";
import styles from "../styles";

import Button from "./Button";
import InputField from "./InputField";
import KeyboardSafeArea from "./KeyboardSafeArea";

function AddCard(props) {
  const [question, updateQuestion] = useState("");
  const [answer, updateAnswer] = useState("");

  const { dispatch, navigation, route } = props;
  const id = route.params.id;

  const submit = () => {
    dispatch(handleAddCard(id, { question, answer }));

    updateQuestion("");
    updateAnswer("");

    navigation.goBack();
  };

  return (
    <KeyboardSafeArea>
      <View style={styles.container}>
        <View style={[styles.card, styles.fill]}>
          <View style={styles.fill}>
            <InputField
              title="Question"
              onChangeText={updateQuestion}
              value={question}
            />

            <InputField
              title="Answer"
              onChangeText={updateAnswer}
              value={answer}
            />
          </View>

          <Button title="Submit" onPress={submit} disabled={!question || !answer} />
        </View>
      </View>
    </KeyboardSafeArea>
  );
}

export default connect()(AddCard);
