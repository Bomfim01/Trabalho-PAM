import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Loja Tech</Text>
      
      <Text style={styles.subtitulo}>
        Bem-vindo à nossa loja de eletrônicos!
      </Text>

      <View style={styles.botoesContainer}>
        <TouchableOpacity 
          style={styles.botao}
          onPress={() => navigation.navigate('Produtos')}
        >
          <Text style={styles.botaoTexto}>Ver Produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.botaoTexto}>Meu Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.botao}
          onPress={() => navigation.navigate('Contato')}
        >
          <Text style={styles.botaoTexto}>Fale Conosco</Text>
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
    marginBottom: 10,
    textAlign: 'center',
    color: '#2c3e50',
  },
  subtitulo: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    color: '#7f8c8d',
  },
  botoesContainer: {
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,  
    marginVertical: 8,
    width: '20%',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  botaoTexto: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;