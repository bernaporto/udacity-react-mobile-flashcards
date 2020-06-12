import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../store/actions";

function AddDeckView({ dispatch, navigation }) {
  const [ title, updateTitle ] = useState("");

  const submit = () => {
    dispatch(handleAddDeck({ title }));

    updateTitle("");

    navigation.navigate("Decks");
  };

  return(
    <View>
      <Text>What is the title of the new deck?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={updateTitle}
        value={title}
      />
      <Button title="Create Deck" onPress={submit}/>
    </View>
  );
}

export default connect()(AddDeckView);
