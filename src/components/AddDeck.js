import React, { useState } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../store/actions";
import styles from "../styles";
import Button from "./Button";
import InputField from "./InputField";

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
        <Text style={styles.text.title}>What is the title of the new deck?</Text>

        <View style={{ marginBottom: 10 }}/>

        <InputField
          onChangeText={updateTitle}
          value={title}
        />

        <Button title="Create Deck" onPress={submit} disabled={!title}/>
      </View>
    </View>
  );
}

export default connect()(AddDeckView);
