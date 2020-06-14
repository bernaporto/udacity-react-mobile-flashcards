import React, { useState } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { handleAddDeck } from "../store/actions";
import { ScreenIds } from "../utils/constants";
import styles from "../styles";

import Button from "./Button";
import InputField from "./InputField";
import KeyboardSafeArea from "./KeyboardSafeArea";

function AddDeckView({ dispatch, navigation }) {
  const [title, updateTitle] = useState("");

  const submit = () => {
    dispatch(handleAddDeck({ title }));

    updateTitle("");

    navigation.navigate(ScreenIds.DECK);
  };

  return (
    <KeyboardSafeArea>
      <View style={styles.container}>
        <View style={[styles.card, styles.fill]}>
          <View style={styles.fill}>
            <Text style={styles.text.title}>What is the title of the new deck?</Text>

            <View style={{ marginBottom: 10 }} />

            <InputField
              onChangeText={updateTitle}
              value={title}
            />
          </View>

          <Button title="Create Deck" onPress={submit} disabled={!title} />
        </View>
      </View>
    </KeyboardSafeArea>
  );
}

export default connect()(AddDeckView);
