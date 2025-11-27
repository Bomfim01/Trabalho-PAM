import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AddLivros = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicionar Livro</Text>
      
      <Text style={styles.subtitulo}>Formulário para adicionar livro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    color: '#7f8c8d',
  },
});

export default AddLivros;