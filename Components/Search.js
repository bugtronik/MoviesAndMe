import React from 'react'

//Importation des component de vue, champ de saisie et bouton
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
  render() {
    return (
      // Ici, on renvoie l'affichage à l'écran
      <View style={{ marginTop: 20 }}>
        <TextInput placeholder="Titre du film" style={{ marginLeft: 5, marginRight: 5, height: 50, borderColor: '#000000', borderWidth: 1, paddingLeft: 5 }} />
        <Button title="Rechercher" onPress={() => {}} />
      </View>
    )
  }
}

export default Search
