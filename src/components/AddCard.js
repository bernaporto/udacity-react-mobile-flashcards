import React, { useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import styles from "../styles";
import Button from "./Button";
import { handleAddCard } from "../store/actions";
import InputField from "./InputField";

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
    <View style={styles.container}>
      <View style={[styles.card, { flex: 1 }]}>
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

        <Button title="Submit" onPress={submit} disabled={!question || !answer} />
      </View>
    </View>
  );
}

export default connect()(AddCard);
