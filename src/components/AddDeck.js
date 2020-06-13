import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../store/actions";
import styles from "../styles";
import Title from "./Title";
import Button from "./Button";

function AddDeckView({ dispatch, navigation }) {
  const [ title, updateTitle ] = useState("");

  const submit = () => {
    dispatch(handleAddDeck({ title }));

    updateTitle("");

    navigation.navigate("Decks");
  };

  return(
    <View style={styles.container}>
      <View style={[styles.card, { flex: 1 }]}>
        <Title>What is the title of the new deck?</Title>

        <TextInput
          style={styles.input.textField}
          onChangeText={updateTitle}
          value={title}
        />

        <Button title="Create Deck" onPress={submit} disabled={!title}/>
      </View>
    </View>
  );
}

export default connect()(AddDeckView);
