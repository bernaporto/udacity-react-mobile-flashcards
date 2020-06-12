import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

function AddDeckView({ navigation }) {
  const [ value, updateValue ] = useState("");

  const submit = () => {
    // dispatch
    
    // clean up value
    updateValue("");
    
    // navigate
    navigation.navigate("Decks");
  };

  return(
    <View>
      <Text>What is the title of the new deck?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={updateValue}
        value={value}
      />
      <Button title="Create Deck" onPress={submit}/>
    </View>
  );
}

export default AddDeckView;
