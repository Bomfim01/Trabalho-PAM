import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Biblioteca</Text>
      
      <View style={styles.botoesContainer}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => navigation.navigate('Livros')}
        >
          <Text style={styles.botaoTexto}>Ver Livros</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => navigation.navigate('Adicionar')}
        >
          <Text style={styles.botaoTexto}>Adicionar Livro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => navigation.navigate('Favoritos')}
        >
          <Text style={styles.botaoTexto}>Favoritos</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#2c3e50',
  },
  botoesContainer: {
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,  
    marginVertical: 8,
    width: '60%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;